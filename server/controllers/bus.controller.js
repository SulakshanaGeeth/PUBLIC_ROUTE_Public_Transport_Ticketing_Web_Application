const Bus = require("../models/bus.model");


const getAllBus = async (req,res,next)=>{
    let buses;
    try{
        buses = await Bus.find();
    } catch (err) {
        console.log(err);
    }

    if (!buses){
        return res.status(404).json({message:"NO Bus Found"})
    }
    return  res.status(200).json({buses})
}


const  getById= async(req,res,next)=>{
    const id = req.params.id;
    let bus;
    try {
        bus = await Bus.findById(id);
    } catch (err) {
        console.log(err)
    }
    if (!bus) {
        return res.status(500).json({message:"No bus Found"});
    }
    return res.status(201).json({ bus});
};


// add new book to database

const addBus = async (req,res,next) => {
    const {busNo,routeNo,from,to,driverId,driverName,available} = req.body;
    let bus;

    try {
        bus = new Bus({

            busNo,
            routeNo,
            from,
            to,
            driverId,
            driverName,
            available
        });
        await bus.save();
    } catch (err){
        console.log(err);
    }

    if (!bus) {
        return res.status(500).json({message:"Unable to Add Product"});
    }
    return res.status(201).json({ bus});
};



const updateBus = async(req,res,next) =>{
    const id = req.params.id;
    const {busNo,routeNo,from,to,driverId,driverName,available} = req.body;
    let bus;

    try {
        bus = await Bus.findByIdAndUpdate(id, {

            busNo,
            routeNo,
            from,
            to,
            driverId,
            driverName,
            available

        });
        bus = await  bus.save();
    } catch (err) {
        console.log(err);
    }

    if (!bus) {
        return res.status(404).json({message:"Unable to update by this id"});
    }
    return res.status(200).json({ bus});

};

const deleteBus = async (req,res,next)=>{
    const id = req.params.id;
    let bus;
    try {
        bus = await Bus.findByIdAndRemove(id)
    }catch (err) {
        console.log(err);
    }
    if (!bus) {
        return res.status(404).json({message:"Unable to delete Product"});
    }
    return res.status(200).json({message : "bus Successfully deleted"});

}




exports.getAllBus = getAllBus;
exports.addBus =addBus;
exports.getById=getById;
exports.updateBus=updateBus;
exports.deleteBus=deleteBus;



// const addProduct = async (ctx)=>{
//
//     try {
//         const {productId,productName,productCategory,quentity,price}=ctx.request.body;
//
//     const product = await Product.create({
//         productId:productId,
//         productName:productName,
//         productCategory:productCategory,
//         quentity:quentity,
//         price:price,
//     });
//     return (ctx.body=product);
//     } catch (error) {
//         return (ctx.body={ message:error.message});
//     }
//
//
// };









//
// const getProduct = async (ctx)=>{
//
//     try {
//         const products = await Product.find({});
//         return (ctx.body=products);
//     } catch (error) {
//         return (ctx.body={ message:error.message});
//
//     }
//
// };
//
// const updateProduct = async(ctx)=>{
//     try {
//         const productsId = ctx.params.productsId;
//         // let course = await Course.findById(productsId);
//         // if (!course){
//         //     throw new Error("Course not Found");
//         // }
//         const { productId,productName,productCategory,quentity,price} =ctx.request.body;
//         const product = await Product.findByIdAndUpdate(productsId,{
//             productId:productId,
//             productName:productName,
//             productCategory:productCategory,
//             quentity:quentity,
//             price:price,
//
//
//         })
//         return (ctx.body = product);
//     } catch (error) {
//         return (ctx.body={ message:error.message});
//
//     }
// };
//
//
//
// const deleteProduct = async (ctx)=>{
//     try {
//         const productsId = ctx.params.productsId;
//         const product = await Course.findByIdAndDelete(productsId);
//         return (ctx.body = product);
//     } catch (error) {
//         return (ctx.body={ message:error.message});
//
//     }
// };

