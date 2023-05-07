const Rooms=require("../Models/rooms")

const room_details=async(req,res)=>{
    try{
        const foundroomdetails = await Rooms.findOne({
            where: {
              roomNo: req.body.roomNo,
            },
          });
    if(foundroomdetails){
        return res.status(401).json({ message: "Room Details is Already registered" });
    }else{
    var roomdata={
        roomNo:req.body.roomNo,
        chair:req.body.chair,
        table:req.body.table,
        bed:req.body.bed,
        wardrobe:req.body.wardrobe,
        light:req.body.light,
        fan:req.body.fan
    }
    const Data = await Rooms.create(roomdata);

    var msg = "Room Details is registered";
    res.status(200).json({ alertMsg: msg });
}
}
catch(err) {
    res.status(400).json({
      success: false,
      message: `can't register,:${err.message}`,
    });
    console.log(err);
}   
}

//getroom details
const all_room_details=async(req,res)=>{
    try {
      const roomdetails=await Rooms.findAll()
      res.status(202).json(roomdetails)
    } catch (error) {
       res.status(401).json("Can't find Room Details")
    }
  }




module.exports={room_details,all_room_details};
