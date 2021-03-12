<template>
    <admin-layout>
        <div>
            <h2 class="text-xl text-gray-900 font-semibold border-b-2 border-gray-900">{{ lectureSheet.title }}</h2>

            <div class="mt-5">
                <div class="mb-6 flex justify-end items-center space-x-2">
                    <inertia-link 
                        :href="route('admin.lecture-sheets.edit', lectureSheet.id)" 
                        class="btn-main px-3 py-2 text-sm font-semibold uppercase tracking-widest"
                    >
                        Edit
                    </inertia-link>

                    <inertia-link 
                        :href="route('admin.lecture-sheets.index')" 
                        class="btn-main px-3 py-2 text-sm font-semibold uppercase tracking-widest"
                    >
                        Back
                    </inertia-link>
                </div>
                <div class="flex space-x-5">
                   <div class="w-2/3 px-4 py-5 bg-white shadow-sm">
                       <h2 class="mb-3 text-sm font-bold uppercase tracking-wider">Lecture Sheet Details</h2>
                       <p>Title: {{ lectureSheet.title }}</p>
                       <p>Course: {{ lectureSheet.course }}</p>
                       <p>Subject: {{ lectureSheet.subject }}</p>
                       <p>Topics: {{ lectureSheet.topics }}</p>
                   </div>
                   <div class="w-1/3 px-4 py-5 bg-white shadow-sm">
                       <h2 class="mb-3 text-sm font-bold uppercase tracking-wider">File Info</h2>
                       <div>
                           <p class="text-lg font-bold">{{  lectureSheet.orginal_file_name }}</p>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    </admin-layout>
</template>

<script>
    import AdminLayout from '@/Layouts/AdminLayout'

    export default {
        components: {
            AdminLayout
        },
        props: {
            lectureSheet: Object,
        },
       
        methods: {
            // toogleExamPublication() {
            //     this.$inertia.put(route('admin.exams.publish', this.exam.exam_code), {}, {
            //         preserveScroll: true,
            //         onSuccess: () => {
            //             let message = 'Exam published successfully!';
            //             if(this.exam === 'pending') {
            //                 message = 'Exam un published successfully!';
            //             } 
            //             alert(message);
            //         }
            //     });
            // }
        }
    }
</script>