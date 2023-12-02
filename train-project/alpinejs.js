document.addEventListener('alpine:init', () => {
    Alpine.data('usersData', () => ({
        users: [],
        mainUsers: [],
        pageUsers: [],
        isloading: false,
        showAddModal: false,
        pageCount: 1,
        itemsCount: 4,
        currentPage: 1,
        searchChar: "",
        newUserInfo: {
            name: "",
            username: "",
            email: "",
        },



        getUsers() {
            this.isloading = true
            axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
                this.users = res.data
                this.mainUsers = res.data
                this.pagination()


            }).finally(() => {
                this.isloading = false
            })
        },
        pagination() {
            this.pageCount = Math.ceil(this.users.length / this.itemsCount) //10 / 4 = 3
            let start = (this.currentPage * this.itemsCount) - this.itemsCount //0
            let end = this.currentPage * this.itemsCount // 4
            this.pageUsers = this.users.slice(start, end)
            console.log(this.pageUsers)

        },

        nextPage() {
            this.currentPage++
            if (this.currentPage > this.pageCount) {
                this.currentPage = this.pageCount
            }
            this.pagination()
        },
        prevPage() {
            this.currentPage--

            if (this.currentPage < 1) {
                this.currentPage = 1
            }
            this.pagination()

        },
        handleChangeItemsCount(value) {
            this.currentPage = 1
            if (value < 1) this.itemsCount = 1
            if (value > this.users.length) this.itemsCount = this.users.length
        },

        handleSearch(value) {

            this.users = this.mainUsers.filter(user => (user.name.includes(value) || user.username.includes(value) || user.email.includes(value)))
            this.currentPage = 1
            this.pagination()
        },

        handleSubmitAddUsersForm() {
            this.isloading = true
            axios.post("https://jsonplaceholder.typicode.com/users", this.newUserInfo).then((res) => {

                if (res.status == 201) {
                    this.mainUsers.push(res.data)
                    this.showAddModal = false
                    this.handleResetForm()

                    this.pagination()

                    // 'rounded' is the class I'm applying to the toast
                    M.toast({
                        html: '!کاربر با موفقیت ایجاد شد',
                        classes: 'rounded green'
                    });

                }
            }).finally(() => {
                this.isloading = false

            })
        },

        handleResetForm() {
            this.newUserInfo = {
                name: "",
                username: "",
                email: "",
            }
        },

    }))
})