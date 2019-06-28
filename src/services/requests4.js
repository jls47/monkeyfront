import axios from 'axios'

class music4{
	static createSongs(form){
		//return axios.post(`http://localhost:3000/api/songs/`, {data: form})
		return axios.post(`https://monkeyback4.herokuapp.com/api/songs/`,{data: form})
		  .then(response => {
		  	return response;
		  })
		  .catch(e => {
		  	return e;
		  })
	}

	static getRecentSongs(){
		//return axios.get(`http://localhost:3000/api/songs/r/`)
		return axios.get(`https://monkeyback4.herokuapp.com/api/songs/r/`)
			.then(response => {
				this.songs = response;
				return this.songs.data;
			})
			.catch(e => {
				return e;
			})
	}

	static getSongsByArtist(artist){
		//return axios.get(`http://localhost:3000/api/songs/a/`+artist)
		return axios.get(`https://monkeyback4.herokuapp.com/api/songs/a/`+artist)
			.then(response => {
				this.songs = response;
				return this.songs.data;
			})
			.catch(e => {
				return e;
			})

	}

	static searchSongs(term){
		//return axios.get('http://localhost:3000/api/songs/s/'+term)
		return axios.get(`https://monkeyback4.herokuapp.com/api/songs/s/`+term)
			.then(response => {
				this.songs = response;
				return this.songs.data;
			})
			.catch(e => {
				return e;
			})
	}

	static editSongs(form){
		//return axios.put(`http://localhost:3000/api/songs/`, form)
		return axios.put(`https://monkeyback4.herokuapp.com/api/songs/`, form)
			.then(response => {
				this.res = response;
				return this.res;
			})
			.catch(e => {
				return e;
			})
	}

	static searchArtist(term){
		//return axios.get('http://localhost:3000/api/artists/s/'+term)
		return axios.get(`https://monkeyback4.herokuapp.com/api/artists/s/`+term)
			.then(response => {
				this.artists = response;
				return this.artists.data;
			})
			.catch(e => {
				return e;
			})
	}

	static getArtistsByLetter(letter){
		return axios.get(`https://monkey-back.herokuapp.com/api/artists/l/`+letter)
			,then(response => {
				this.artists = response;
				return this.artists.data;
			})
			.catch(e => {
				return e;
			})
	}

	static deleteSongs(data){
		//return axios.delete('http://localhost:3000/api/songs/' + data)
		return axios.delete(`https://monkeyback4.herokuapp.com/api/songs/` + data)
			.then(response => {
				return response;
			})
			.catch(e => {
				return e;
			})
	}

	static adminLog(data){
		//return axios.get('http://localhost:3000/api/user/', {
		return axios.get(`https://monkeyback4.herokuapp.com/api/user`, {
			params: {
				name: data.username,
				password: data.password
			}
		})
		.then(response => {
			return response;
		})
		.catch(e => {
			return e;
		})
	}
}

export default music4;