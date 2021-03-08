<template>
    <teacher-layout>  
        <div>
            <h2 class="text-xl text-gray-900 font-semibold border-b-2 border-gray-900">Profile</h2>
            <div class="max-w-xl pt-5">
                <form @submit.prevent="update">
                    <div class="flex mt-4 space-x-3">
                        <div class="w-1/2">
                            <jet-label for="first_name" value="First Name" />
                            <jet-input id="first_name" type="text" class="mt-1 block w-full" v-model="form.first_name" />
                            <jet-input-error :message="form.errors.first_name" class="mt-2" />
                        </div>
                        <div class="w-1/2">
                            <jet-label for="last_name" value="Last Name" />
                            <jet-input id="last_name" type="text" class="mt-1 block w-full" v-model="form.last_name" />
                            <jet-input-error :message="form.errors.last_name" class="mt-2" />
                        </div>
                    </div>

                    <div class="mt-4">
                        <jet-label for="email" value="Email" />
                        <jet-input id="email"  type="email" disabled :value="teacher.email" class="mt-1 block w-full" />
                    </div>
                    <div class="mt-4">
                        <jet-label for="phone" value="Phone" />
                        <jet-input id="phone" type="text" class="mt-1 block w-full" v-model="form.phone" />
                        <jet-input-error :message="form.errors.phone" class="mt-2" />
                    </div>

                    
                    <div class="mt-4">
                        <jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Update Profile
                        </jet-button>
                        <jet-secondary-button @click.native.prevent="goBack">
                            Back
                        </jet-secondary-button>
                    </div>
                </form>
            </div>
        </div>
       
    </teacher-layout>
</template>

<script>
    import TeacherLayout from '@/Layouts/TeacherLayout'
    import JetInput from '@/Components/Shared/FormElement/Input'
    import JetInputError from '@/Components/Shared/FormElement/InputError'
    import JetLabel from '@/Components/Shared/FormElement/Label'
    import JetButton from '@/Components/Shared/Button/Button'
    import JetSecondaryButton from '@/Components/Shared/Button/SecondaryButton'

    export default {
        components: {
            TeacherLayout,
            JetInput,
            JetInputError,
            JetLabel,
            JetButton,
            JetSecondaryButton,
        },

        props: {
            teacher: Object
        },

        data() {
            return {
                form: this.$inertia.form({
                    first_name: this.teacher.first_name,
                    last_name: this.teacher.last_name,
                    phone: this.teacher.phone
                }),
            }
        },

        methods: {
            update(){
                this.form.put(this.route('teachers.profile.update'));
            }, 
            goBack() {
                this.$inertia.visit(route('teachers.dashboard'));
            }
        }
    }
</script>