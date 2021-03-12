<template>
    <admin-layout>
        <div>
            <h2 class="text-xl text-gray-900 font-semibold border-b-2 border-gray-900">All Lecture Sheets</h2>

            <div class="mt-5">
                <div class="mb-6 flex justify-between items-center">
                    <search-filter v-model="form.search" class="w-full max-w-lg mr-4" @reset="reset"></search-filter>
                    <div>
                        <inertia-link 
                            :href="route('admin.lecture-sheets.create')" 
                            class="btn-main px-3 py-2 text-sm font-semibold uppercase tracking-widest"
                        >
                            Create
                        </inertia-link>
                    </div>
                </div>

                <div class="bg-white rounded shadow overflow-x-auto">
                    <table class="w-full whitespace-no-wrap">
                        <tr class="text-left">
                            <th class="px-6 pt-4 pb-4 font-normal">Title</th>
                            <th class="px-6 pt-4 pb-4 font-normal text-center">Course</th>
                            <th class="px-6 pt-4 pb-4 font-normal text-center">Subject</th>
                            <th class="px-6 pt-4 pb-4 font-normal text-center">Action</th>
                        </tr>

                        <tr v-for="lectureSheet in lectureSheets.data" :key="lectureSheet.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
                            <td class="border-t px-6 py-2">
                                {{ lectureSheet.title }}
                            </td>
                            <td class="border-t px-6 py-2 text-center">
                                {{ lectureSheet.course }}
                            </td>
                            <td class="border-t px-6 py-2 text-center">
                                {{ lectureSheet.subject }}
                            </td>
                            
                            <td class="border-t px-6 py-2 text-center space-x-2">
                                 <inertia-link 
                                    :href="route('admin.lecture-sheets.show', lectureSheet.id)" 
                                    title="Details"
                                    class="inline-flex text-gray-800 hover:text-gray-500 focus:outline-none"
                                >
                                   <svg class="w-5 h-5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </inertia-link>

                                <inertia-link 
                                    :href="route('admin.lecture-sheets.edit', lectureSheet.id)" 
                                    title="Edit"
                                    class="inline-flex text-gray-800 hover:text-gray-500 focus:outline-none"
                                >
                                    <svg class="h-5 w-5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </inertia-link>

                                <button 
                                    class="inline-flex text-red-500 hover:text-red-700 focus:outline-none"
                                    title="Delete"
                                    @click.prevent="deleteModel(route('admin.lecture-sheets.destroy', lectureSheet.id))"
                                >

                                    <svg class="h-5 w-5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />        
                                    </svg>

                                </button>
                            </td>
                        </tr>
                        <tr v-if="lectureSheets.data.length === 0">
                            <td class="border-t px-6 py-4" colspan="4">No lecture sheets found.</td>
                        </tr>
                    
                    </table>
                </div>

                <pagination v-if="lectureSheets.data.length" :links="lectureSheets.links" />
            </div>
        </div>
    </admin-layout>
</template>

<script>
    import AdminLayout from '@/Layouts/AdminLayout'
    import Pagination from '@/Components/Shared/Pagination'
    import SearchFilter from '@/Components/Shared/SearchFilter'

    export default {
        components: {
            AdminLayout,
            Pagination,
            SearchFilter
        },
        props: {
            lectureSheets: Object,
            filters: Object
        },
        data() {
            return {
                form: {
                    search: this.filters.search,
                }
            }
        },
        watch: {
            form: {
                handler: _.throttle(function() {
                    let query = _.pickBy(this.form);
                    this.$inertia.replace(route('admin.lecture-sheets.index', Object.keys(query).length ? query : { remember: 'forget' }))
                }, 150),
                deep: true,
            },
        },
        methods: {
            deleteModel(url) {
                this.$inertia.delete(url, {
                    onBefore: () => confirm('Are you sure you want to delete?'),
                });
            },

            reset() {
                this.form = _.mapValues(this.form, () => null)
            },
        }
    }
</script>