<template>
    <b-navbar toggleable="md" class="navbar">
        <router-link to="/" class="navbar-brand"><b-img :src="logo" width="50" height="50" /></router-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav type>
                <b-nav-item><router-link to= "/">Home</router-link></b-nav-item>
                <b-nav-item><router-link to= "/6-BindingBlade">Binding Blade</router-link></b-nav-item>
                <b-nav-item><router-link to= "/Calculator">Calculator</router-link></b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import Image from '../assets/felogo.png'
export default {
    name: 'Nav',
    components: {
    },
    data() {
        return {
            logo: Image
        }
    }
}
</script>