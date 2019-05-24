import axios from 'axios'

class music{
	static createSong(form){
		console.log(form);
		return axios.post(`https://monkey-back.herokuapp.com`,form)
		  .then(response => {
		  	console.log(response);
		  })
		  .catch(e => {
		  	console.log(e);
		  })
	}

	static getSongsById(id){
		return axios.get(`https://monkey-back.herokuapp.com`,form)
		  .then(response => {
		    this.song = response.data['data'];
		    return this.song;
		  })
		  .catch(e => {
		  	console.log(e);
		  })
	}

	static getRecentSongs(){
		//return axios.get(`http://localhost:3000/api/songs/r/`)
		return axios.get(`https://monkey-back.herokuapp.com/api/songs/r/`)
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
		return axios.get(`https://monkey-back.herokuapp.com/api/songs/a/`+artist)
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
		return axios.get(`https://monkey-back.herokuapp.com/api/songs/s/`+term)
			.then(response => {
				this.songs = response;
				return this.songs.data;
			})
			.catch(e => {
				return e;
			})
	}

	static editSong(form){

	}

	static searchArtist(term){
		//return axios.get('http://localhost:3000/api/artists/s/'+term)
		return axios.get(`https://monkey-back.herokuapp.com/api/artists/s/`+term)
			.then(response => {
				this.artists = response;
				return this.artists.data;
			})
			.catch(e => {
				return e;
			})
	}

	static deleteSongs(data){
		return axios.delete('http://localhost:3000/api/songs/',data)
			.then(response => {
				return response;
			})
			.catch(e => {
				return e;
			})
	}
}

export default music;