<template>
    <teacher-layout>
        <div>
            <h2 class="text-xl text-gray-900 font-semibold border-b-2 border-gray-900">{{ schedule.name }} - Class Notes</h2>

            <div class="mt-5">
                <div class="mb-6 flex justify-end items-center space-x-2">
                    <inertia-link 
                        :href="route('teachers.schedules.show', schedule.class_id)" 
                        class="btn-main px-3 py-2 text-sm font-semibold uppercase tracking-widest"
                    >
                        Back
                    </inertia-link>
                </div>

                <div class="flex items-start space-x-5">
                    <div class="w-1/3 px-4 py-5 bg-white shadow-sm">
                       <h2 class="mb-3 text-sm font-bold uppercase tracking-wider">Add Note</h2>
                       <div>
                            <div>
                                <jet-label for="file" value="Upload a Clss Note" />
                                <jet-input 
                                    @change.native="handleFileUpload"
                                    ref="classNoteFileInput" 
                                    id="file" 
                                    type="file" 
                                    class="mt-3" />
                                <jet-input-error :message="form.errors.file" class="mt-2" />
                            </div>
                             <div class="mt-4">
                                <app-main-button @click.native.prevent="upload" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                    Upload
                                </app-main-button>
                                <app-secondary-button @click.native.prevent="resetFormData">
                                    Cancel
                                </app-secondary-button>
                            </div>
                       </div>
                    </div>
                    <div class="w-2/3 px-4 py-5 bg-white shadow-sm">
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

                                        <button
                                            @click.prevent="deleteClassNote(classNote.id)"
                                            class="inline-flex text-red-500 hover:text-red-400 focus:outline-none"
                                        >
                                            <svg class="w-5 h-5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
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
        </div>
    </teacher-layout>
</template>

<script>
    import TeacherLayout from '@/Layouts/TeacherLayout'
    import AppMainButton from '@/Components/Shared/Button/Button'
    import AppSecondaryButton from '@/Components/Shared/Button/SecondaryButton'
    import JetInput from '@/Components/Shared/FormElement/Input'
    import JetInputError from '@/Components/Shared/FormElement/InputError'
    import JetLabel from '@/Components/Shared/FormElement/Label'

    export default {
        components: {
            TeacherLayout,
            AppMainButton,
            AppSecondaryButton,
            JetInput,
            JetInputError,
            JetLabel
        },
        props: {
            schedule: Object,
            classNotes: Array,
        },
        data() {
            return {
                form: this.$inertia.form({
                    file: null,
                }),
            }
        },
        methods: {
            handleFileUpload(event) {
                this.form.file = event.target.files[0];
            },
            
            upload(){
                this.form.post(route('teachers.schedules.notes', this.schedule.class_id), {
                    preserveScroll: true,
                    onSuccess: () => {
                        this.resetFormData();
                        alert('Note added successfully');
                    }
                });
            },  

            downloadClassNote(id) {
                this.$inertia.post(route('teachers.notes.download', id));
            },

            deleteClassNote(id) {
                this.$inertia.delete(route('teachers.notes.destroy', id), {
                    onBefore: () => confirm('Are you sure you want to delete?'),
                    onSuccess: () => {
                        alert('Note deleted successfully');
                    }
                });
            },

            resetFormData() {
                this.form.reset();
                this.$refs.classNoteFileInput.$el.value = '';
            }
        }
    }
</script>