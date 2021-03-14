<template>
    <student-layout>
         <div class="py-12">
            <div class="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center">
                    <h4 class="text-xl font-bold">Class Details - {{ schedule.name }}</h4>
                    <inertia-link 
                        :href="route('students.classes.index')" 
                        class="btn-main px-3 py-2 text-sm font-semibold uppercase tracking-widest"
                    >
                        Back
                    </inertia-link>
                </div>
               
                <div class="mt-4 px-4 py-2 bg-white shadow-sm">
                    <h2 class="mb-3 text-sm font-bold uppercase tracking-wider">Details</h2>
                    <p>Exam Name: {{ schedule.name }}</p>
                    <p>Course: {{ schedule.batch.course.name }}</p>
                    <p>Batch: {{ schedule.batch.name }}</p>
                    <p>Subject: {{ schedule.subject.name }}</p>
                    <p>Teacher: {{ schedule.teacher ? schedule.teacher.full_name : '' }}</p>
                    <p>Status: <span class="font-bold uppercase tracking-wider">{{ schedule.status }}</span></p>
                    <p class="mt-3 font-bold">Class Time: {{ schedule.class_time }}</p>
                </div>
                
                <div class="mt-5 px-4 py-2 bg-white shadow-sm">
                   <div class="flex justify-between items-center mb-5">
                        <h2 class="text-sm font-bold uppercase tracking-wider">All Class Notes</h2>
                        <a v-if="classNotes.length"
                            :href="route('notes.download.all', schedule.class_id)"
                            class="inline-flex text-gray-800 border-b hover:text-gray-500 focus:outline-none"
                        >
                            <svg class="w-5 h-5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>

                            <span class="ml-2">All Notes</span> 
                        </a>
                    </div>
                    <div>
                        <table class="w-full whitespace-no-wrap">
                            <tr class="text-left">
                                <th class="px-6 pt-4 pb-4 font-normal">Name</th>
                                <th class="px-6 pt-4 pb-4 font-normal text-center">Type</th>
                                <th class="px-6 pt-4 pb-4 font-normal text-center">Size</th>
                                <th class="px-6 pt-4 pb-4 font-normal text-center">Action</th>
                            </tr>
                            <tr v-for="classNote in classNotes" :key="classNote.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
                                <td class="border-t px-6 py-2 text-sm">
                                    {{ classNote.name }}
                                </td>

                                <td class="border-t px-6 py-2 text-sm text-center">
                                    <p>{{ classNote.type }}</p>
                                </td>

                                <td class="border-t px-6 py-2 text-sm text-center">
                                    <p>{{ classNote.size }}</p>
                                </td>

                                <td class="border-t px-6 py-2 text-center space-x-2">
                                    <a :href="route('notes.download.single', classNote.id)"
                                        class="inline-flex text-gray-800 hover:text-gray-500 focus:outline-none"
                                    >
                                        <svg class="w-5 h-5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </a>
                                </td>
                            </tr>
                            <tr v-if="classNotes.length === 0">
                                <td class="border-t px-6 py-4" colspan="4">No Class note found.</td>
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
    import AppMainButton from '@/Components/Shared/Button/Button'

    export default {
        components: {
            StudentLayout,
            AppMainButton,
        },
        props: {
            schedule: Object,
            classNotes: Array,
        }
    }
</script>