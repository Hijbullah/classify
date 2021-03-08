<template>
    <admin-layout>  
        <div>
            <h2 class="text-xl text-gray-900 font-semibold border-b-2 border-gray-900">Edit Batch</h2>
            <div class="pt-5">
                <form @submit.prevent="update">
                    <div>
                        <jet-label for="name" value="Course Name" />
                        <jet-input id="name" type="text" class="mt-1 block w-full" v-model="form.name" placeholder="Course Name..." autocomplete="name" />
                        <jet-input-error :message="form.errors.name" class="mt-2" />
                    </div>
                    <div class="mt-4">
                        <jet-label for="details" value="Details" />
                        <textarea 
                            id="details" 
                            rows="5" 
                            class="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" 
                            placeholder="Details about Course"
                            v-model="form.details"
                        ></textarea>
                        <jet-input-error :message="form.errors.details" class="mt-2" />
                    </div>

                    <div class="block mt-4">
                        <label class="inline-flex items-center">
                            <jet-checkbox class="cursor-pointer" v-model="form.admission_status" />
                            <span class="ml-2 text-sm text-gray-600 select-none">Admission Open</span>
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

    export default {
        components: {
            AdminLayout,
            JetInput,
            JetInputError,
            JetLabel,
            JetCheckbox,
            JetButton,
            JetSecondaryButton
        },

         props: {
            course: Object
        },
        
        data() {
            return {
                form: this.$inertia.form({
                    name: this.course.name,
                    details: this.course.details,
                    admission_status: this.course.admission_status ? true : false,
                })
            }
        },
        methods: {
            update(){
                this.form.put(route('admin.courses.update', this.course.slug), {
                    preserveScroll: true,
                });
            }, 
            goBack() {
                this.$inertia.visit(route('admin.courses.index'));
            }
        }
    }
</script>