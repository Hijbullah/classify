<template>
    <admin-layout>  
        <div>
            <h2 class="text-xl text-gray-900 font-semibold border-b-2 border-gray-900">Edit Class Schedule</h2>
            <div class="pt-5">
                <form @submit.prevent="update">
                    <div class="flex space-x-3">
                        <div class="w-1/3">
                            <jet-label for="course" value="Course" />
                            <jet-input id="course" :value="schedule.batch.course.name" type="text" class="mt-1 block w-full disabled:opacity-50" disabled />   
                        </div>

                        <div class="w-1/3">
                            <jet-label for="batch" value="Batch" />
                            <jet-input id="batch" :value="schedule.batch.name" type="text" class="mt-1 block w-full disabled:opacity-50" disabled />   
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
                        <jet-label for="name" value="Class Name" />
                        <jet-input id="name" type="text" class="mt-1 block w-full" v-model="form.name" placeholder="e.g. Lecture 01" />
                        <jet-input-error :message="form.errors.name" class="mt-2" />
                    </div> 

                    <div class="mt-4">
                        <jet-label for="topics" value="Class Topics" />
                        <textarea 
                            id="topics" 
                            rows="3" 
                            class="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" 
                            placeholder="e.g. Sentence, verb..."
                            v-model="form.topics"
                        ></textarea>
                        <jet-input-error :message="form.errors.topics" class="mt-2" />
                    </div>

                    <div class="mt-4 flex space-x-3">
                        <div class="w-1/2">
                            <jet-label value="Teacher" />
                            <vue-select 
                                class="vue_select_box mt-1"
                                placeholder="Choose a Teacher"
                                :options="teachers" 
                                label="full_name" 
                                :reduce="teacher => teacher.id" 
                                v-model="form.teacher"
                            >
                            </vue-select>                        
                            <jet-input-error :message="form.errors.teacher" class="mt-2" />
                        </div>

                        <div class="w-1/2">
                            <jet-label for="class_time" value="Class Time" />
                            <datetime
                                id="class_time"
                                type="datetime"
                                v-model="form.class_time"
                                :week-start="6"
                                value-zone="Asia/Dhaka"
                                input-class="mt-1 w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                use12-hour
                                auto
                            ></datetime>

                            <jet-input-error :message="form.errors.class_time" class="mt-2" />
                        </div> 
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
    import { Datetime } from 'vue-datetime'

    import 'vue-select/dist/vue-select.css'
    import 'vue-datetime/dist/vue-datetime.css'

    export default {
        components: {
            AdminLayout,
            JetInput,
            JetInputError,
            JetLabel,
            JetCheckbox,
            JetButton,
            JetSecondaryButton,
            VueSelect,
            Datetime
        },
        props: {
            schedule: Object,
            subjects: Array,
            teachers: Array,
        },

        data() {
            return {
                form: this.$inertia.form({
                    subject: this.schedule.subject,
                    teacher: this.schedule.teacher,
                    name: this.schedule.name,
                    topics: this.schedule.topics,
                    class_time: this.schedule.class_time,
                }),
            }
        },

        methods: {
            update(){
                this.form.put(route('admin.schedules.update', this.schedule.class_id), {
                    preserveScroll: true,
                });
            }, 
            goBack() {
                this.$inertia.visit(route('admin.schedules.index'));
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