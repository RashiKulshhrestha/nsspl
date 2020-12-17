router.get("/", 
async (req, res) => {
    try {
      const user = await User.findById((req.user.id),{"hour":1},{"attendence":1});
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }

    router.post("/",
    
    async(req,res)=>{
    
        try{
            let hours = checkout - checkin
            user = new User({
                hours
            });
            await hours.save();
            res.json({ msg: "hours calculated"})
        }
        catch(err){ 
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    });