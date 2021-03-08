<template>
    <admin-layout>  
        <div>
            <h2 class="text-xl text-gray-900 font-semibold border-b-2 border-gray-900">Edit Batch</h2>
            <div class="pt-5">
                <form @submit.prevent="update">
                    <div>
                        <jet-label value="Batch Name" />
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

                    <div class="mt-4">
                        <jet-label for="name" value="Batch Name" />
                        <jet-input id="name" type="text" class="mt-1 block w-full" v-model="form.name" placeholder="Batch Name..." autocomplete="name" />
                        <jet-input-error :message="form.errors.name" class="mt-2" />
                    </div>

                    <div class="block mt-4">
                        <label class="inline-flex items-center">
                            <jet-checkbox class="cursor-pointer" v-model="form.status" />
                            <span class="ml-2 text-sm text-gray-600 select-none">Active</span>
                        </label>
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
            batch: Object
        },
        
        data() {
            return {
                form: this.$inertia.form({
                    course: this.batch.course_id,
                    name: this.batch.name,
                    status: this.batch.status ? true : false
                })
            }
        },
        methods: {
            update(){
                this.form.put(route('admin.batches.update', this.batch.slug), {
                    preserveScroll: true,
                });
            }, 
            goBack() {
                this.$inertia.visit(route('admin.batches.index'));
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