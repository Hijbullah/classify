<template>
    <teacher-layout>
        <div>
            <h2 class="text-xl text-gray-900 font-semibold border-b-2 border-gray-900">All Class Schedules</h2>

            <div class="mt-5">
                <div class="bg-white rounded shadow overflow-x-auto">
                    <table class="w-full whitespace-no-wrap">
                        <tr class="text-left">
                            <th class="px-6 pt-4 pb-4 font-normal">Name</th>
                            <th class="px-6 pt-4 pb-4 font-normal text-center">Subject</th>
                            <th class="px-6 pt-4 pb-4 font-normal text-center">Course</th>
                            <th class="px-6 pt-4 pb-4 font-normal text-center">Batch</th>
                            <th class="px-6 pt-4 pb-4 font-normal text-center">Class Time</th>
                            <th class="px-6 pt-4 pb-4 font-normal text-center">Status</th>
                            
                            <th class="px-6 pt-4 pb-4 font-normal text-center">Action</th>
                        </tr>

                        <tr v-for="schedule in schedules.data" :key="schedule.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
                            <td class="border-t px-6 py-2 text-sm">
                                {{ schedule.name }}
                            </td>

                            <td class="border-t px-6 py-2 text-sm text-center">
                                <p>{{ schedule.subject }}</p>
                            </td>

                            <td class="border-t px-6 py-2 text-center text-sm">
                                {{ schedule.course }}
                            </td>

                            <td class="border-t px-6 py-2 text-center text-sm">
                                {{ schedule.batch }}
                            </td>

                            <td class="border-t px-6 py-2 text-center text-xs">
                                {{ schedule.class_time }}
                            </td>
                           
                            <td class="border-t px-6 py-2 text-center">
                                <span class="inline-flex items-center px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">{{ schedule.status }}</span>
                            </td>
                            
                            <td class="border-t px-6 py-2 text-center space-x-2">
                                <inertia-link 
                                    title="Details"
                                    :href="route('teachers.schedules.show', schedule.class_id)" 
                                    class="inline-flex text-gray-800 hover:text-gray-500 focus:outline-none disabled:opacity-50"
                                >
                                    <svg class="w-5 h-5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </inertia-link>
                            </td>
                        </tr>
                        <tr v-if="schedules.data.length === 0">
                            <td class="border-t px-6 py-4" colspan="7">No Class found.</td>
                        </tr>
                    
                    </table>
                </div>

                <pagination v-if="schedules.data.length" :links="schedules.links" />
            </div>
        </div>
    </teacher-layout>
</template>

<script>
    import TeacherLayout from '@/Layouts/TeacherLayout'
    import Pagination from '@/Components/Shared/Pagination'

    export default {
        components: {
            TeacherLayout,
            Pagination,
            
        },
        props: {
            schedules: Object
        }
    }
</script>