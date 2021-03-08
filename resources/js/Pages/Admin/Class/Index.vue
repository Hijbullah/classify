<template>
    <admin-layout>
        <div>
            <h2 class="text-xl text-gray-900 font-semibold border-b-2 border-gray-900">All Class Schedules</h2>

            <div class="mt-5">
                <div class="mb-6 flex justify-between items-center">
                    <search-filter v-model="form.search" class="w-full max-w-lg mr-4" @reset="reset"></search-filter>
                    <div>
                        <inertia-link 
                            :href="route('admin.schedules.create')" 
                            class="btn-main px-3 py-2 text-sm font-semibold uppercase tracking-widest"
                        >
                            Create
                        </inertia-link>
                    </div>
                </div>

                <div class="bg-white rounded shadow overflow-x-auto">
                    <table class="w-full whitespace-no-wrap">
                        <tr class="text-left">
                            <th class="px-6 pt-4 pb-4 font-normal">Name</th>
                            <th class="px-6 pt-4 pb-4 font-normal">Subject</th>
                            <th class="px-6 pt-4 pb-4 font-normal text-center">Course</th>
                            <th class="px-6 pt-4 pb-4 font-normal text-center">Batch</th>
                            <th class="px-6 pt-4 pb-4 font-normal text-center">Teacher</th>
                            <th class="px-6 pt-4 pb-4 font-normal text-center">Class Time</th>
                            <th class="px-6 pt-4 pb-4 font-normal text-center">Status</th>
                            
                            <th class="px-6 pt-4 pb-4 font-normal text-center">Action</th>
                        </tr>

                        <tr v-for="schedule in schedules.data" :key="schedule.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
                            <td class="border-t px-6 py-2 text-sm">
                                {{ schedule.name }}
                            </td>

                            <td class="border-t px-6 py-2 text-sm">
                                {{ schedule.subject }}
                            </td>

                            <td class="border-t px-6 py-2 text-center text-sm">
                                {{ schedule.course }}
                            </td>

                            <td class="border-t px-6 py-2 text-center text-sm">
                                {{ schedule.batch }}
                            </td>

                            <td class="border-t px-6 py-2 text-center text-sm">
                                {{ schedule.teacher ? schedule.teacher : 'Not Assigned' }}
                            </td>

                            <td class="border-t px-6 py-2 text-center text-xs">
                                {{ schedule.class_time }}
                            </td>
                           
                            <td class="border-t px-6 py-2 text-center">
                                <span class="inline-flex items-center px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">{{ schedule.status }}</span>
                            </td>
                            
                            <td class="border-t px-6 py-2 text-center space-x-2">
                                 <button 
                                    @click="ConfirmLiveClass(schedule)" 
                                    :disabled="schedule.status == 'ended'"
                                    class="inline-flex text-gray-800 hover:text-gray-500 focus:outline-none disabled:opacity-50"
                                >
                                    <svg class="w-5 h-5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </button>

                                <!-- <inertia-link 
                                    :href="route('admin.schedules.edit', schedule.class_id)" 
                                    :disabled="schedule.status == 'ended'"
                                    class="inline-flex text-gray-800 hover:text-gray-500 focus:outline-none disabled:opacity-50"
                                >
                                    <svg class="w-5 h-5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </inertia-link> -->

                                <inertia-link 
                                    :href="route('admin.schedules.edit', schedule.class_id)" 
                                    v-if="schedule.status != 'ended'"
                                    class="inline-flex text-gray-800 hover:text-gray-500 focus:outline-none"
                                >
                                    <svg class="h-5 w-5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </inertia-link>

                                <button 
                                    class="inline-flex text-red-500 hover:text-red-700 focus:outline-none"
                                    @click.prevent="deleteSchedule(route('admin.schedules.destroy', schedule.class_id))"
                                >

                                    <svg class="h-5 w-5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />        
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
                    <p v-if="selectedSchedule && !selectedSchedule.teacher">But No Teacher is Assign for this Class. You have to assign a techer first.</p>
                    <p v-if="selectedSchedule && selectedSchedule.teacher">Are you Sure?</p>
                </template>

                <template #footer>
                   <jet-button v-if="selectedSchedule && selectedSchedule.teacher" class="mr-2" @click.native.prevent="startLiveClass">
                        Confirm
                    </jet-button>

                   <jet-button v-if="selectedSchedule && !selectedSchedule.teacher" class="mr-2" @click.native.prevent="assignTeacher">
                        Assign Teacher
                    </jet-button>

                    <jet-secondary-button @click.native="closeModal">
                        Nevermind
                    </jet-secondary-button>
                </template>
            </jet-dialog-modal>
        </div>
    </admin-layout>
</template>

<script>
    import AdminLayout from '@/Layouts/AdminLayout'
    import JetDialogModal from '@/Components/Shared/Modal/DialogModal'
    import Pagination from '@/Components/Shared/Pagination'
    import SearchFilter from '@/Components/Shared/SearchFilter'
    import JetDangerButton from '@/Components/Shared/Button/DangerButton'
    import JetSecondaryButton from '@/Components/Shared/Button/SecondaryButton'
    import JetButton from '@/Components/Shared/Button/Button'

    export default {
        components: {
            AdminLayout,
            JetDialogModal,
            Pagination,
            SearchFilter,
            JetDangerButton,
            JetSecondaryButton,
            JetButton
        },
        props: {
            schedules: Object,
            filters: Object
        },
        data() {
            return {
                liveClassConfirmModal: false,
                selectedSchedule: null,

                form: {
                    search: this.filters.search,
                }
            }
        },
        watch: {
            form: {
                handler: _.throttle(function() {
                    let query = _.pickBy(this.form);
                    this.$inertia.replace(route('admin.schedules.index', Object.keys(query).length ? query : { remember: 'forget' }))
                }, 150),
                deep: true,
            },
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

            assignTeacher() {
                this.liveClassConfirmModal = false;
                this.$inertia.get(route('admin.schedules.edit', this.selectedSchedule.class_id));
            },

            startLiveClass() {
                this.liveClassConfirmModal = false;
                this.$inertia.get(route('class.live.start', this.selectedSchedule.class_id));
            },

            deleteSchedule($url) {
                this.$inertia.delete($url, {
                    onBefore: () => confirm('Are you sure you want to delete?'),
                });
            },

            reset() {
                this.form = _.mapValues(this.form, () => null)
            },
        }
    }
</script>