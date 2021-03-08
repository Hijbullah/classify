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
                                <p>Subject: {{ currentClass.subject }}</p>
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
                            <jet-button @click.native.prevent="reloadThePage">Refresh</jet-button>
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
                                <th class="px-6 pt-4 pb-4 font-normal text-center">Topics</th>
                                <th class="px-6 pt-4 pb-4 font-normal text-center">Teacher</th>
                                <th class="px-6 pt-4 pb-4 font-normal text-center">Class Time</th>
                            </tr>

                            <tr v-for="nextClass in nextClasses" :key="nextClass.class_id" class="hover:bg-gray-100 focus-within:bg-gray-100">
                                <td class="border-t px-6 py-2">
                                    {{ nextClass.name }}
                                </td>
                                <td class="border-t px-6 py-2 text-center">
                                    {{ nextClass.subject }}
                                </td>
                                <td class="border-t px-6 py-2 text-center">
                                    {{ nextClass.topics }}
                                </td>
                                <td class="border-t px-6 py-2 text-center">
                                    {{ nextClass.teacher }}
                                </td>
                                <td class="border-t px-6 py-2 text-center">
                                    {{ nextClass.class_time }}
                                </td>
                            </tr>
                            <tr v-if="nextClasses.length === 0">
                                <td class="border-t px-6 py-4" colspan="5">No Upcoming Class found.</td>
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
    import JetButton from '@/Components/Shared/Button/Button'

    export default {
        components: {
            StudentLayout,
            JetButton
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