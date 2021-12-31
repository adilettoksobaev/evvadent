import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js';

Vue.component('loader', {
    template: `
      <div style="display: flex;justify-content: center;align-items: center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    `
});

new Vue({
    el: '#app',
    data() {
        return {
            loading: false,
            form: {
                name: '',
                email: '',
                text: ''
            },
            reviews: []
        }
    },
    filters: {
        formatDate: function (date) {
            if (date) {
                return moment(String(date)).locale("ru").format('DD MMMM YYYY')
            }
        }
    },
    computed: {
        canCreate() {
          return this.form.name.trim() && this.form.email.trim() && this.form.text.trim()
        }
    },
    methods: {
        async createReview() {
            const {...review} = this.form
        
            const newReview = await request('/api/reviews', 'POST', review)
        
            this.reviews.push(newReview)
        
            this.form.name = this.form.email = this.form.text = '';
            Fancybox.close();
            setTimeout(() => {
                Fancybox.show([{ src: "#thanks-review", type: "inline" }]);
            }, 200);
        },
    },
    async mounted() {
        this.loading = true
        this.reviews = await request('/api/reviews')
        this.loading = false
    }
});

async function request(url, method = 'GET', data = null) {
    try {
        const headers = {}
        let body
    
        if (data) {
            headers['Content-Type'] = 'application/json'
            body = JSON.stringify(data)
        }
    
        const response = await fetch(url, {
            method,
            headers,
            body
        })
        return await response.json()
    } catch (e) {
        console.warn('Error:', e.message)
    }
}