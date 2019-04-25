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

	static getSongs(){

	}

	static getSongsByArtist(term){

	}

	static searchSong(term){

	}

	static editSong(form){

	}

	static searchArtist(term){

	}
}