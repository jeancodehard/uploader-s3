const Post = require('../models/Post')

exports.envio = async (req, res) => {
const {originalname: name, size, filename: key} = req.file;
   const post = await Post.create({

       name,
       size,
       key,
       url: '',

   });

   return res.json(post);
}
