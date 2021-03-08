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
                                <p class="text-xs">({{ schedule.topics }})</p>
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
                                <button 
                                    :disabled="schedule.status == 'ended'"
                                    @click="ConfirmLiveClass(schedule)" 
                                    class="inline-flex text-gray-800 hover:text-gray-500 focus:outline-none disabled:opacity-50"
                                >
                                    <svg class="w-5 h-5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </button>

                            </td>
                        </tr>
                        <tr v-if="schedules.data.length === 0">
                            <td class="border-t px-6 py-4" colspan="7">No Class found.</td>
                        </tr>
                    
                    </table>
                </div>

                <pagination v-if="schedules.data.length" :links="schedules.links" />
            </div>

            <!--Confirmation Modal -->
            <jet-dialog-modal :show="liveClassConfirmModal" @close="closeModal">
                <template #title>
                    Start Live Class
                </template>

                <template #content>
                    <p>You are about for start Live Class.</p>
                    <p >Are you Sure?</p>
                </template>

                <template #footer>
                   <jet-button class="mr-2" @click.native.prevent="startLiveClass">
                        Confirm
                    </jet-button>

                    <jet-secondary-button @click.native="closeModal">
                        Nevermind
                    </jet-secondary-button>
                </template>
            </jet-dialog-modal>
        </div>
    </teacher-layout>
</template>

<script>
    import TeacherLayout from '@/Layouts/TeacherLayout'
    import JetDialogModal from '@/Components/Shared/Modal/DialogModal'
    import Pagination from '@/Components/Shared/Pagination'
    import SearchFilter from '@/Components/Shared/SearchFilter'
    import JetDangerButton from '@/Components/Shared/Button/DangerButton'
    import JetSecondaryButton from '@/Components/Shared/Button/SecondaryButton'
    import JetButton from '@/Components/Shared/Button/Button'

    export default {
        components: {
            TeacherLayout,
            JetDialogModal,
            Pagination,
            SearchFilter,
            JetDangerButton,
            JetSecondaryButton,
            JetButton
        },
        props: {
            schedules: Object
        },
        data() {
            return {
                liveClassConfirmModal: false,
                selectedSchedule: null,
            }
        },
       
        methods: {
            ConfirmLiveClass(schedule) {
                console.log(schedule);
                this.selectedSchedule = schedule;
                this.liveClassConfirmModal = true;
            },

            closeModal() {
                this.liveClassConfirmModal = false;
                this.selectedSchedule = null;
            },

            startLiveClass() {
                this.liveClassConfirmModal = false;
                this.$inertia.get(route('class.live.start', this.selectedSchedule.class_id));
            }
        }
    }
</script>