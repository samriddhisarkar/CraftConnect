import React from 'react'
import {Box,Stack} from "@chakra-ui/react"
import Card from './Card'
import axios from "axios"

const Pay = () => {

  const checkouthandler =async(amount)=>{
    const {data:{key}}=await axios.get("http://localhost:3000/api/getkey")
    const {data:{order}}=await axios.post("http://localhost:3000/checkout",{amount})
    console.log(window);
    const options ={
      key,
      amount:order.amount,
      currency:"INR",
      name:"Sam",
      description:"Razorpay tutorial",
      image:"https://avatars.githubusercontent.com/u/165637475?v=4",
      order_id:order.id,
      callback_url:"http://localhost:3000/paymentverification",
      prefill:{
        name:"Samriddhi Sarkar",
        email:"samriddhi@gmail.com",
        contact:"1234567890"
      },
      notes:{
        "address":"razorapy official"
      },
      theme:{
        "color":"#3399cc"
      }
    };
    const razor = new window.Razorpay(options);
    razor.open();

  }

  return (
    <Box>
    <Stack h={"100vh"} justifyContent={"center"} alignItems={"center"} direction={["column","row"]}>
     <Card amount={3000} img={"https://i.etsystatic.com/32548115/r/il/9087d0/4831457736/il_fullxfull.4831457736_54nh.jpg"} checkouthandler={checkouthandler}  />
     <Card amount={3000} img={"https://media.istockphoto.com/id/1081293980/photo/el-yap%C4%B1m%C4%B1-ke%C3%A7e-%C3%A7anta.jpg?s=612x612&w=0&k=20&c=HxPfoAn5gVRmTj8D6Lp6z9q7CEDJO8kWYTRz6DtDYr0="} checkouthandler={checkouthandler}  />
    </Stack>
  </Box>
  )
}

export default Pay