<template>
    <admin-layout>  
        <div>
            <h2 class="text-xl text-gray-900 font-semibold border-b-2 border-gray-900">Edit Lecture Sheet</h2>
            <div class="pt-5">
                <form @submit.prevent="update">
                    <div class="flex space-x-3">
                        <div class="w-1/3">
                            <jet-label value="Course" />
                            <vue-select 
                                class="vue_select_box mt-1"
                                placeholder="Choose a Course"
                                :options="courses" 
                                label="name" 
                                :reduce="course => course.id" 
                                v-model="form.course"
                            >
                            </vue-select>                        
                            <jet-input-error :message="form.errors.course" class="mt-2" />
                        </div>


                        <div class="w-1/3">
                            <jet-label value="Subject" />
                            <vue-select 
                                class="vue_select_box mt-1"
                                placeholder="Choose a Subject"
                                :options="subjects" 
                                label="name" 
                                :reduce="subject => subject.id" 
                                v-model="form.subject"
                            >
                            </vue-select>                        
                            <jet-input-error :message="form.errors.subject" class="mt-2" />
                        </div>
                    </div>

                    <div class="mt-4">
                        <jet-label for="title" value="Title" />
                        <jet-input id="title" type="text" class="mt-1 block w-full" v-model="form.title" placeholder="e.g. Lecture 01" />
                        <jet-input-error :message="form.errors.title" class="mt-2" />
                    </div>

                     <div class="mt-4">
                        <jet-label for="topics" value="Topics" />
                        <textarea 
                            id="topics" 
                            rows="3" 
                            class="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" 
                            placeholder="e.g. Sentence, verb..."
                            v-model="form.topics"
                        ></textarea>
                        <jet-input-error :message="form.errors.topics" class="mt-2" />
                    </div>

                    <div class="mt-4">
                        <jet-label value="Uploaded File" />
                        <p class="mt-1 font-bold">{{ lectureSheet.file }}</p>
                    </div>
                    
                    <div class="mt-4">
                        <jet-label for="file" value="Upload a Lecture Sheet" />
                        <jet-input 
                            @change.native="handleFileUpload"
                            id="file" 
                            type="file" 
                            class="mt-1" />
                        <jet-input-error :message="form.errors.file" class="mt-2" />
                    </div>

                    <div class="mt-4">
                        <jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Update
                        </jet-button>
                        <jet-secondary-button @click.native.prevent="goBack">
                            Back
                        </jet-secondary-button>
                    </div>
                </form>
            </div>
        </div>
       
    </admin-layout>
</template>

<script>
    import AdminLayout from '@/Layouts/AdminLayout'
    import JetInput from '@/Components/Shared/FormElement/Input'
    import JetInputError from '@/Components/Shared/FormElement/InputError'
    import JetLabel from '@/Components/Shared/FormElement/Label'
    import JetCheckbox from '@/Components/Shared/FormElement/Checkbox'
    import JetButton from '@/Components/Shared/Button/Button'
    import JetSecondaryButton from '@/Components/Shared/Button/SecondaryButton'
    import VueSelect from 'vue-select'

    import 'vue-select/dist/vue-select.css'
    export default {
        components: {
            AdminLayout,
            JetInput,
            JetInputError,
            JetLabel,
            JetCheckbox,
            JetButton,
            JetSecondaryButton,
            VueSelect
        },
        props: {
            courses: Array,
            subjects: Array,
            lectureSheet: Object
        },

        data() {
            return {
                form: this.$inertia.form({
                    _method: 'PUT',
                    course: this.lectureSheet.course,
                    subject: this.lectureSheet.subject,
                    title: this.lectureSheet.title,
                    topics: this.lectureSheet.topics,
                    file: null,
                }),
            }
        },
        methods: {
            handleFileUpload(event) {
                this.form.file = event.target.files[0];
            },
            
            update(){
                this.form.post(route('admin.lecture-sheets.update', this.lectureSheet.id), {
                    preserveScroll: true,
                });
            },  

            goBack() {
                this.$inertia.visit(route('admin.lecture-sheets.show', this.lectureSheet.id));
            }
        }
    }
</script>

<style scoped>
    .vue_select_box >>> .vs__search::placeholder {
        color: #394066;
        font-size: 16px;
    }
    .vue_select_box >>> .vs__dropdown-toggle {
        background: #fff;
        border: 1px solid #ddd;
        color: #394066;
        padding: 7px 5px;
        font-size: 14px;
    }
    .vue_select_box >>> .vs__dropdown-menu {
        color: #394066;
        font-size: 14px;
    }

    .vue_select_box >>> .vs__dropdown-option:hover, 
    .vue_select_box >>> .vs__dropdown-option--highlight 
    {
        background-color: #394066;
        color: white;
    }

    .vue_select_box >>> .vs__clear,
    .vue_select_box >>> .vs__open-indicator {
        fill: #394066;
    }

</style>