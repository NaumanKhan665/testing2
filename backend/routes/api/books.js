const express =require("express")
const router=express.Router();


const book=require("../../models/books");

router.get('/',(req,res)=>{

    book.find()
    .then(books=>res.json(books))
    .catch("no book found");
});

router.get('/:id',(req,res)=>{

    book.findById(req.params.id)
    .then(book=>res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
})


router.post('/',(req,res)=>{

     const data=new book({

        title:req.body.title,
        isbn:req.body.isbn,
        author:req.body.author,
        description:req.body.description,
        published_date:req.body.published_date,
        publisher:req.body.publisher,
        updated_date:req.body.updated_date

     })
     try {
         const dataTOsave=  data.save()

         res.status(200).json(dataTOsave)
         console.log("data save")

        
     }catch(err){
        console.log(err)
        res.status(400).json({msg:"data not save "})

     }

})

router.put('/:id', (req, res) => {
    book.findByIdAndUpdate(req.params.id, req.body)
      .then(book => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  });



  router.delete('/:id', (req, res) => {
    book.findByIdAndRemove(req.params.id, req.body)
      .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a book' }));
  });


  module.exports = router;
