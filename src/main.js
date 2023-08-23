import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import PhotographyPage from './components/PhotographyPage.vue'
import ArtPage from './components/ArtPage.vue'
import ProgrammingPage from './components/ProgrammingPage.vue'
import WritingPage from './components/WritingPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: "/", 
            name: HomePage,
            component: HomePage
        },
        { 
            path: "/photography",
            name: PhotographyPage,
            component: PhotographyPage 
        },
        { 
            path: "/art", 
            name: ArtPage,
            component: ArtPage
        },
        {
            path: "/writing",
            name: WritingPage,
            component: WritingPage
        },
        {
            path: "/programming",
            name: ProgrammingPage,
            component: ProgrammingPage
        }
    ]
})

const app = createApp(App)
app.use(router);
app.mount('#app')
