const dummyAnimeData = [
    {
      mal_id: 1,
      url: "https://myanimelist.net/anime/1/Cowboy_Bebop",
      title: "Cowboy Bebop",
      image_url: "https://cdn.myanimelist.net/images/anime/4/19644.jpg?s=5923940438978994227"
    },
    {
      mal_id: 5,

      url:"https://myanimelist.net/anime/5/Sen_to_Chihiro_no_Kamikakushi",
      title: "Spirited Away",
      image_url: "https://cdn.myanimelist.net/images/anime/6/74045.jpg?s=0c1167557858329a557ce107c5959e84"
    },
    {
      mal_id: 1535,
      url: "https://myanimelist.net/anime/1535/Death_Note",
      title: "Death Note",
      image_url: "https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=48d8a2a06ab81a200455797a904d8563"
    }
  ];
  
  export default function handler(req, res) {
    // GET all anime
    if (req.method === 'GET') {
      res.status(200).json(dummyAnimeData);
    } 

else if (req.method === 'GET' && req.query.mal_id) {
      const anime = dummyAnimeData.find(a => a.mal_id === parseInt(req.query.mal_id));
      if (anime) {
        res.status(200).json(anime);
      } else {
        res.status(404).json({ message: 'Anime not found' });
      }
    } 
  
    // Invalid request method
    else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }