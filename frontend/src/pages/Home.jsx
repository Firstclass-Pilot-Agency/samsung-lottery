import { useEffect, useRef, useState } from "react";
import { checkLottery } from "../lotterydb/usersService";

import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import img4 from '../assets/img4.jpeg'

export default function Home(){
    const parent = useRef()
    const Info = useRef()
    const NotFound = useRef()
    const Titcket = useRef()
    const [userData, setUserData] = useState({
        name: "",
        _id: "",
        phoneNumber: "",
        lotteryId: "",
        winner: "",
    })

    useEffect(() => {
        // NotFound.current.style.display = 'none'
        // Titcket.current.style.display = 'none'
    },[])

    const [formData, setFormData] = useState({
        phoneNumber: "",
        lotteryId: ""
    })

    const { phoneNumber, lotteryId } = formData
    const submit =  (e) => {
        e.preventDefault()        
        if (phoneNumber && lotteryId) {
            let userdata = {
                phoneNumber: phoneNumber,
                lotteryId: lotteryId,
            }
            CheckInDB(userdata)
            return
        }
        alert('Fill all fields')
    }
    const handleInput = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }


    async function CheckInDB(data) {
        await checkLottery(data).then((info) => {
            console.log(info);

            if (info.data.status === "success") {
                Info.current.style.display = "none"
                Titcket.current.style.display = 'block'
                setUserData(info.data.data)
                alert(info.data.message)
            } else {
                Info.current.style.display = "none"
                NotFound.current.style.display = 'block'
                alert(info.data.message)
            }
            
        }).catch((err) => {
            console.log(err); 
            alert(err.response.data.message)
        })
    }
    function openCheck() {
        parent.current.style.display = 'flex'
        Info.current.style.display = "flex"
        NotFound.current.style.display = 'none'
        Titcket.current.style.display = 'none'
    }
    function closeCheck() {
        parent.current.style.display = 'none'
        Info.current.style.display = "flex"
        NotFound.current.style.display = 'none'
        Titcket.current.style.display = 'none'
    }


    return (
        <>
            <div className="heroSection">
                <h1>Samsung lottery winners</h1>
                <p>
                    Now Samsung has decided to give lottery
                    prizes to his regular customers.
                    Claim yours now.
                </p>
                <button onClick={openCheck}>Check Your Number</button>
            </div>
            <section>
                

                <div className="infoSection">
                    <p>
                        Well It's a promotional program held for
                        Instagram WhatsApp and tiktok and Twitter
                        members worldwide, while participants were
                        selected through random selection in our
                        Computerized System (C.T.S.S.) from a
                        database of over WhatsApp users from
                        Africa 🇿🇦 America 🇻🇮  Asia 🌏, Suriname 🇸🇷,
                        Australia 🇦🇺  🇨🇦 Canada  Barbuda 🇦🇬  Europe 🇪🇺
                        Middle East,the 🇧🇸 Bahamas  Trinidad 🇹🇹 and
                        New Zealand 🇳🇿 Curaca'o 🇨🇼, st.
                        Louis 🇬🇹Pakistan 🇵🇰 Australia 🇦🇺
                    </p>
                </div>

                <div className="WinnerSection">
                    <div className="top">
                        <h1>Our Winners</h1>
                        <p>
                            Still feeling uneasy here are our winners
                            for 2022. What are you waiting for join
                            the next cohort and earn big this year.
                        </p>
                        <button onClick={openCheck}>Check Your Number</button>
                    </div>
                    <div className="bottom">
                        <div className="winnerSlide">

                            <div className="slideCard">
                                <div className="winneerImage">
                                    <img src={img1} alt="" />
                                </div>
                            </div>
                            <div className="slideCard">
                                <div className="winneerImage">
                                    <img src={img2} alt="" />
                                </div>
                            </div>
                            <div className="slideCard">
                                <div className="winneerImage">
                                    <img src={img3} alt="" />
                                </div>
                            </div>
                            <div className="slideCard">
                                <div className="winneerImage">
                                    <img src={img4} alt="" />
                                </div>
                            </div>
                
                        </div>

                        
                    </div>
                </div>

                <div className="AboutSection">
                    
                    <div className="top">
                        <div className="banner">

                        </div>
                        <div className="textAbout">
                            <h1>What Are We</h1>
                            <p>
                                The Samsung Lucky Draw is a Draw organizing every month. In this Draw customers can win Cash Prizes like $800,000 and many more.
                            </p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="video"></div>
                        <div className="justInfo">
                            <p>Our prizes are provided to the customer after winning of lucky draw. The Samsung Lucky Draw Prizes also be redeemed by Samsung Lottery Number.</p>
                            <p>Samsung Lucky Draw is a firm which helps people to become millionaire just by shopping. This is an amazing experience, so let’s win Prizes with Samsung Lucky Draw.</p>
                        </div>
                    </div>
                </div>

                <div className="StepSection">
                    <div className="top">
                        <h1>How Winners can Get The Lucky Draw Prize ?</h1>
                        <p>
                            Our prizes are provided to the customer after winning of lucky draw. 
                        </p>
                    </div>
                </div>

                <div className="FinalSection">
                    <div className="top">
                        <h1>Something special
                            is coming </h1>
                        <p>
                            Wow! SAMSUNG care is organizing all SIM’s lucky draw every month. With the support of 10 of the most famous telecommunication companies, we are  selecting 5 winners for 500000 to 20000000 cash prizes each month. Join in if you are filling lucky.
                        </p>
                    </div>
                </div>

            </section>

            <div className="mobilePropmt" ref={parent}>
                <div className="propWrap">
                    <div className="closeButton" onClick={closeCheck}></div>
                    <div className="Check" ref={Info}>
                        <h1>Check Your Luck</h1>
                        <form onSubmit={submit}>
                            <input onChange={handleInput} name="phoneNumber" className="input" type="text" required placeholder="Phone Number" />
                            <input onChange={handleInput} name="lotteryId" className="input" type="text" required placeholder="Lottery Number" />
                            <div className="buttonWrap">
                                <button type="submit" onSubmit={submit}>Check Number</button>
                            </div>
                        </form>
                    </div>

                    {/* nottick */}
                    <div className="LotNot" ref={NotFound}>
                        <div className="warnBox"></div>
                        <h1>Lottery Invalid</h1>
                        <p>
                            The phone number you
                            entered or Lottery Id
                            is not found.
                        </p>
                        <div className="buttonWrap">
                            <button onClick={openCheck} type="submit">Try Again</button>
                        </div>
                    </div>

                    {/* tick */}
                    <div className="Ticket" ref={Titcket}>
                        <div className="Tick">

                            <div className="Info">
                                <div className="photoI">
                                    <div className="circleImg"></div>
                                    <h1>{ userData.name}</h1>
                                    <p>{ userData._id}</p>
                                </div>
                                <div className="content">
                                    <div className="wrapCot">
                                        <div className="CoTBox">
                                            <p className="CotHead">Phone Number</p>
                                            <p className="CotText">{userData.phoneNumber}</p>
                                        </div>
                                        <div className="CoTBox">
                                            <p className="CotHead">Lottery Id</p>
                                            <p className="CotText">{userData.lotteryId}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lastBot">
                                    <div className="inner">
                                        <p>Stauts</p>
                                        <p>{userData.winner ? 'You Won' : "Pending"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}