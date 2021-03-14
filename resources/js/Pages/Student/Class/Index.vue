<template>
    <student-layout>
        <div class="py-12">
            <div class="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
                <div>
                    <h4 class="text-xl font-bold">Current Live Class</h4>
                    <div class="mt-2 px-4 py-2 bg-white shadow-sm">
                        <div v-if="currentClass" class="flex justify-between items-center ">
                            <div>
                                <p class="text-xl font-bold">{{ currentClass.name }}</p> 
                                <p>Subject: {{ currentClass.subject.name }}</p>
                                <p>Class Topics: {{ currentClass.topics }}</p>
                                <p>Teacher: {{ currentClass.teacher.full_name }}</p>
                            </div>
                            <div>
                                <inertia-link 
                                    :href="route('students.classes.join', currentClass.class_id)" 
                                    class="inline-flex text-gray-800 hover:text-gray-500 focus:outline-none"
                                >
                                    Join Now
                                </inertia-link>
                            </div>
                        </div>
                        <div v-else class="flex justify-between items-center">
                            <p class="font-semibold">No Live Class found.</p>
                            <app-button @click.native.prevent="reloadThePage">Refresh</app-button>
                        </div>
                    </div>
                </div>
                <div class="mt-8">
                    <h4 class="text-xl font-bold">Upcoming Live Class</h4>
                    <div class="mt-4 bg-white rounded shadow overflow-x-auto">
                        <table class="w-full whitespace-no-wrap">
                            <tr class="text-left">
                                <th class="px-6 pt-4 pb-4 font-normal">Name</th>
                                <th class="px-6 pt-4 pb-4 font-normal text-center">Subject</th>
                                <th class="px-6 pt-4 pb-4 font-normal text-center">Teacher</th>
                                <th class="px-6 pt-4 pb-4 font-normal text-center">Class Time</th>
                                <th class="px-6 pt-4 pb-4 font-normal text-center">Action</th>
                            </tr>

                            <tr v-for="nextClass in nextClasses" :key="nextClass.class_id" class="hover:bg-gray-100 focus-within:bg-gray-100">
                                <td class="border-t px-6 py-2">
                                    {{ nextClass.name }}
                                </td>
                                <td class="border-t px-6 py-2 text-center">
                                    {{ nextClass.subject }}
                                </td>
                                <td class="border-t px-6 py-2 text-center">
                                    {{ nextClass.teacher }}
                                </td>
                                <td class="border-t px-6 py-2 text-center">
                                    {{ nextClass.class_time }}
                                </td>
                                <td class="border-t px-6 py-2 text-center">
                                    <inertia-link 
                                        :href="route('students.classes.show', nextClass.class_id)" 
                                        title="Dashboard"
                                        class="inline-flex text-gray-800 hover:text-gray-500 focus:outline-none"
                                    >
                                        <svg class="w-5 h-5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </inertia-link>
                                </td>
                            </tr>
                            <tr v-if="nextClasses.length === 0">
                                <td class="border-t px-6 py-4" colspan="4">No Upcoming Class found.</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </student-layout>
</template>

<script>
    import StudentLayout from '@/Layouts/StudentLayout'
    import AppButton from '@/Components/Shared/Button/Button'

    export default {
        components: {
            StudentLayout,
            AppButton
        },
        props: {
            currentClass: Object,
            nextClasses: Array
        },
        methods: {
            reloadThePage() {
                this.$inertia.reload();
            }
        }
    }
</script>