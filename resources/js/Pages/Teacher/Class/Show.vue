<template>
    <teacher-layout>
        <div>
            <h2 class="text-xl text-gray-900 font-semibold border-b-2 border-gray-900">{{ schedule.name }} - Details</h2>

            <div class="mt-5">
                <div class="mb-6 flex justify-end items-center space-x-2">
                    <p v-if="isClassEnded" class="text-xl font-bold">Class has been ended Ended</p>

                    <inertia-link 
                        :href="route('teachers.schedules.notes', schedule.class_id)" 
                        class="btn-main px-3 py-2 text-sm font-semibold uppercase tracking-widest"
                    >
                        Class Notes
                    </inertia-link>

                    <inertia-link 
                        :href="route('teachers.schedules.index')" 
                        class="btn-main px-3 py-2 text-sm font-semibold uppercase tracking-widest"
                    >
                        Back
                    </inertia-link>
                </div>

                <div class="flex space-x-5">
                   <div class="w-2/3 px-4 py-5 bg-white shadow-sm">
                       <h2 class="mb-3 text-sm font-bold uppercase tracking-wider">Details</h2>
                       <p>Exam Name: {{ schedule.name }}</p>
                       <p>Course: {{ schedule.course }}</p>
                       <p>Batch: {{ schedule.batch }}</p>
                       <p>Subject: {{ schedule.subject }}</p>
                       <p>Status: <span class="font-bold uppercase tracking-wider">{{ schedule.status }}</span></p>
                       <p class="mt-3 font-bold">Class Time: {{ schedule.class_time }}</p>
                   </div>
                   <div class="w-1/3 px-4 py-5 bg-white shadow-sm">
                        <h2 class="mb-3 text-sm font-bold uppercase tracking-wider">Start Live Class</h2>
                    
                        <div class="mt-3">
                            <div v-if="!isClassEnded" class="mt-3">
                                <p class="my-3 text-sm font-bold text-green-500">For starting Class, Just click the button bellow and follow the instructions.</p>
                                <button 
                                    @click="confirmLiveClass" 
                                    class="inline-flex text-gray-800 hover:text-gray-500 focus:outline-none disabled:opacity-50"
                                >
                                    <svg class="w-8 h-8 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>

        <!--Confirmation Modal -->
        <confirmation-modal :show="liveClassConfirmModal" @close="closeModal">
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
        </confirmation-modal>
    </teacher-layout>
</template>

<script>
    import TeacherLayout from '@/Layouts/TeacherLayout'
    import ConfirmationModal from '@/Components/Shared/Modal/ConfirmationModal'
    import AppMainButton from '@/Components/Shared/Button/Button'
    import AppSecondaryButton from '@/Components/Shared/Button/SecondaryButton'

    export default {
        components: {
            TeacherLayout,
            ConfirmationModal,
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
            confirmLiveClass() {
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