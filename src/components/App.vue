<template>
  <v-app>
    <v-toolbar 
      app 
      color="primary" 
      dark
    >
      <v-toolbar-title>Vue boilerplate</v-toolbar-title>
      <v-spacer />
      <span class="mx-4">{{ user }}</span>
    </v-toolbar>
    <v-content>
      <v-btn class="success" @click="login">Login</v-btn>
      <v-btn class="warning" @click="logout">Logout</v-btn>
      
      <v-text-field v-model="message" label="Mensaje"/>
      <v-btn @click="publish">Publish</v-btn>

      <p v-for="message in messages" @click="remove(message)">
        {{ message.message }}
      </p>
      <input type="file" @change="change">
      <a :href="link" target="_blank">
        {{ link }}
      </a>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { db, storage } from '@/firebase'
export default {
  data() {
    return {
      message: '',
      messages: [],
      link: null,
    }
  },
  computed: {
    ...mapState('root', ['user']),
  },
  created() {
    this.init()
  },
  firestore: {
    messages: db.collection('messages'),
  },
  methods: {
    ...mapActions('root', ['login', 'logout', 'init']),
    async publish() {
      const message = this.message
      await db.collection('messages').add({ message })
      this.message = ''
    },
    async remove({ id }) {
      await db
        .collection('messages')
        .doc(id)
        .delete()
    },
    async change(e) {
      const [file] = e.target.files
      const ref = storage.ref().child(file.name)
      await ref.put(file)
      this.link = await ref.getDownloadURL()
    },
  },
}
</script>
