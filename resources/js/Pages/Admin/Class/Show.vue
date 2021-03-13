<template>
    <admin-layout>
        <div>
            <h2 class="text-xl text-gray-900 font-semibold border-b-2 border-gray-900">{{ schedule.name }}</h2>

            <div class="mt-5">
                <div class="mb-6 flex justify-end items-center space-x-2">
                    <p v-if="isClassEnded" class="text-xl font-bold">Class has been ended Ended</p>

                    <inertia-link 
                        v-if="schedule.status === 'pending'"
                        :href="route('admin.schedules.edit', schedule.class_id)" 
                        class="btn-main px-3 py-2 text-sm font-semibold uppercase tracking-widest"
                    >
                        Edit
                    </inertia-link>

                    <inertia-link 
                        :href="route('admin.schedules.index')" 
                        class="btn-main px-3 py-2 text-sm font-semibold uppercase tracking-widest"
                    >
                        Back
                    </inertia-link>
                </div>

                <div class="flex space-x-5">
                   <div class="w-2/3 px-4 py-5 bg-white shadow-sm">
                       <h2 class="mb-3 text-sm font-bold uppercase tracking-wider">Details</h2>
                       <p>Exam Name: {{ schedule.name }}</p>
                       <p>Course: {{ schedule.batch.course.name }}</p>
                       <p>Batch: {{ schedule.batch.name }}</p>
                       <p>Subject: {{ schedule.subject.name }}</p>
                       <p>Status: <span class="font-bold uppercase tracking-wider">{{ schedule.status }}</span></p>
                       <p class="mt-3 font-bold">Class Time: {{ schedule.class_time }}</p>
                   </div>
                   <div class="w-1/3 px-4 py-5 bg-white shadow-sm">
                        <h2 class="mb-3 text-sm font-bold uppercase tracking-wider">Teacher's Details</h2>
                    
                        <div class="mt-3">
                            <div v-if="schedule.teacher">
                                <p class="font-bold">{{ schedule.teacher.full_name }}</p>
                        
                                <div v-if="!isClassEnded && schedule.teacher" class="mt-3">
                                    <p class="my-3 text-sm font-bold text-green-500">Class can be started by Teacher or Admin. For starting Class, Just click the button bellow and follow the instructions.</p>
                                    <button 
                                        @click="ConfirmLiveClass" 
                                        class="inline-flex text-gray-800 hover:text-gray-500 focus:outline-none disabled:opacity-50"
                                    >
                                        <svg class="w-8 h-8 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div v-else>
                                <p class="mb-3 text-sm font-bold text-red-500">
                                    No teacher assigned. Before Starting Class, ateacher must be Assigned
                                </p>
                                
                                <inertia-link
                                    
                                    :href="route('admin.schedules.edit', schedule.class_id)" 
                                    class="btn-main px-3 py-2 text-xs font-semibold uppercase tracking-widest"
                                >
                                    Assign a Teacher
                                </inertia-link>
                            </div>
                        </div>
                   </div>
                </div>

                <div class="mt-5 px-4 py-5 bg-white shadow-sm">
                    <h2 class="mb-3 text-sm font-bold uppercase tracking-wider">Class Notes</h2>
                    <div>
                        <p class="text-red-400">No Class notes found...</p>
                        <p>Teacher can add class note from his dashboard.</p>
                    </div>
                </div>
            </div>
        </div>
        <!--Confirmation Modal -->
        <confirmation-dialog-modal :show="liveClassConfirmModal" @close="closeModal">
            <template #title>
                Start Live Class
            </template>

            <template #content>
                <p>You are about for start Live Class.</p>
                <p>Are you Sure?</p>
            </template>

            <template #footer>
                <app-main-button class="mr-2" @click.native.prevent="startLiveClass">
                    Confirm
                </app-main-button>

                <app-secondary-button @click.native="closeModal">
                    Nevermind
                </app-secondary-button>
            </template>
        </confirmation-dialog-modal>
    </admin-layout>
</template>

<script>
    import AdminLayout from '@/Layouts/AdminLayout'
    import ConfirmationDialogModal from '@/Components/Shared/Modal/DialogModal'
    import AppMainButton from '@/Components/Shared/Button/Button'
    import AppSecondaryButton from '@/Components/Shared/Button/SecondaryButton'

    export default {
        components: {
            AdminLayout,
            ConfirmationDialogModal,
            AppMainButton,
            AppSecondaryButton
        },
        props: {
            schedule: Object,
        },
        data() {
            return {
                liveClassConfirmModal: false,
            }
        },
        computed: {
            isClassEnded() {
                return this.schedule.status === 'ended';
            }
        },
        methods: {
             ConfirmLiveClass() {
                this.liveClassConfirmModal = true;
            },

            closeModal() {
                this.liveClassConfirmModal = false;
            },

            startLiveClass() {
                this.liveClassConfirmModal = false;
                this.$inertia.get(route('class.live.start', this.schedule.class_id));
            }
        }
    }
</script>