import axios from 'axios'

class music{
	static createSong(form){
		console.log(form);
		return axios.post(`http://monkey-back.herokuapp.com`,form)
		  .then(response => {
		  	console.log(response);
		  })
		  .catch(e => {
		  	console.log(e);
		  })
	}

	static getOneSong(id){
		return axios.get(`http://monkey-back.herokuapp.com`,form)
		  .then(response => {
		    this.song = response.data['data'];
		    return this.song;
		  })
		  .catch(e => {
		  	console.log(e);
		  })
	}

	static getRecentSongs(){

	}

	static getSongsByArtist(term){

	}

	static searchSongs(term){

	}

	static editSong(form){

	}

	static searchArtist(term){
		return axios.get('http://localhost:3000/api/artists/s/'+term)
			.then(response => {
				this.artists = response;
				return this.artists.data;
			})
			.catch(e => {
				return e;
			})
	}

	static deleteSongs(data){
		
	}
}

export default music;