import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from './ProductDetailes.module.css';
import { useForm } from "react-hook-form";
import ProDiscription from "./proDiscription";
import ProSpecification from "./proSpecification";

const ProTabs = ({Product, attributes}) => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const [active, setActive] = useState(true)
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [reviewActive, setReviewActive] = useState(true)
    const [reviewActive2, setReviewActive2] = useState(false);

    const handleClick = () => {
        setActive(active => !active);
        setActive1(active1 => false);
        setActive2(active2 => false);
        setActive3(active4 => false);
        setActive4(active4 => false);
    };
    const handleClick1 = ()  => {
        setActive(active => false);
        setActive1(active1 => !active1);
        setActive2(active2 => false);
        setActive3(active2 => false);
        setActive4(active2 => false);
    };
    const handleClick2 = () => {
        setActive(active => false);
        setActive1(active1 => false);
        setActive2(active2 => !active2);
        setActive3(active2 => false);
        setActive4(active2 => false);
    };
    const handleClick3 = () => {
        setActive(active => false);
        setActive1(active1 => false);
        setActive2(active2 => false);
        setActive3(active2 => !active3);
        setActive4(active2 => false);
    }
    const handleClick4 = () => {
        setActive(active => false);
        setActive1(active1 => false);
        setActive2(active2 => false);
        setActive3(active2 => false);
        setActive4(active2 => !active4);
    };
    const displaReview = () => {
        setReviewActive (reviewActive => !reviewActive)
        setReviewActive2 (reviewActive2 => false)
    }
    const displaReview2 = () => {
        setReviewActive2 (reviewActive2 => !reviewActive2)
        setReviewActive (reviewActive => false)
    }
    return (
        <>
        {/* ====== Product More Special Detailes ============================================= */}
            <div className={classes.aboutProduct}>
                <div className="row p-0 m-0">
                    <div className="col-lg-10 col-12 p-0">
                        <div className={classes.informationBtns+" p-0 m-0"}>
                            <button onClick={handleClick}   className={!active ?  `col-lg-3 col-6 px-sm-3 px-1 py-2 `:`${classes.borderBgcColor} px-sm-3 px-1 py-2 col-lg-3 col-6`}>Product Description</button>
                            <button onClick={handleClick1}  className={!active1 ? `col-lg-3 col-6 px-sm-3 px-1 py-2 `:`${classes.borderBgcColor} px-sm-3 px-1 py-2 col-lg-3 col-6`}>Product Specifications</button>
                            <button onClick={handleClick2}  className={!active2 ? `col-lg-2 col-4 px-sm-3 px-1 py-2 `:`${classes.borderBgcColor} px-sm-3 px-1 py-2 col-lg-2 col-4`}>Reviews</button>
                            <button onClick={handleClick3}  className={!active3 ? `col-lg-2 col-4 px-sm-3 px-1 py-2 `:`${classes.borderBgcColor} px-sm-3 px-1 py-2 col-lg-2 col-4`}>Q & A</button>
                            <button onClick={handleClick4}  className={!active4 ? `col-lg-2 col-4 px-sm-3 px-1 py-2 `:`${classes.borderBgcColor} px-sm-3 px-1 py-2 col-lg-2 col-4`}>Our Services</button>
                        </div>      
                        
                        <div className={!active ? `${classes.productDescription} d-none` : `${classes.productDescription} p-3`}>
                            <ProDiscription Product={Product} category={Product.categoryName} />
                        </div>

                        <div className={!active1 ? `${classes.productSpecification} d-none` : `${classes.productSpecification} p-3` }>
                            <p>Information on {Product.name}</p>
                            <p className={classes.bold+" fs-5 mt-3 mb-1 ps-2"}>General</p>
                                <ProSpecification Product={Product} attributes={attributes}/>
                        </div>

                        <div  className={!active2 ? `${classes.reviews} row ${classes.dis}` : `${classes.reviews} row`}>
                            <div className={`col-md-2 ${classes.rating}`}>
                                <p className={classes.bold}>4.9</p>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <p>Based on 79 rating</p>
                            </div>

                            <div className={`col-md-2 ${classes.ratingCol}`}>
                                <div className="tf-distribution tf-dist-user">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="range">5 ☆
                                                </td>
                                                <td title="67/75 (89%)"  className="bar">
                                                    <div style={{width:'200px !important', backgroundColor:'#00de01' }} className={classes.ratingProgressFiveStars}>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="range">4 ☆
                                                </td>
                                                <td title="7/75 (9%)" className="bar">
                                                    <div style={{width:'20px !important', backgroundColor:'#bcee01' }} className={classes.ratingProgressFourStars}>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="range">3 ☆</td>
                                                <td title="0/75 (0%)" className="bar">
                                                    <div style={{width:'0px !important', backgroundColor:'#00de01' }} className={classes.ratingProgressThreeStars}>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="range">2 ☆
                                                </td>
                                                <td title="0/75 (0%)" className="bar">
                                                    <div style={{width:'0px !important', backgroundColor:'#00de01' }} className={classes.ratingProgressTwoStars}>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="range">1 ☆
                                                </td>
                                                <td title="1/75 (1%)" className="bar">
                                                    <div style={{width:'30px !important', backgroundColor:'#e8afb1' }} className={classes.ratingProgressOneStars}>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className={`col-md-12  ${classes.customersReviews}`}>

                                <div className={`col-md-3 ${classes.reviewBtns}`}>
                                        <button className={reviewActive ? `${classes.reviewBtn}` : `${classes.reviewBtnNone}`} onClick={displaReview}>User Reviews</button>
                                        <button className={reviewActive2 ? `${classes.reviewBtn}` : `${classes.reviewBtnNone}`} onClick={displaReview2}>Write Reviews</button>
                                </div>

                                <div className={!reviewActive ? `${classes.dis}` : `${classes.userReviews}`}>
                                    <div style={{display:'inline-block'}} className={classes.user}>
                                        <div className={classes.logo} style={{backgroundColor:' rgb(152, 194, 132) !important'}}>SS
                                        </div>
                                        <h5>Sharka Sami </h5>
                                        <span title="Verified buyer" className={classes.verified}><i className="fa-solid fa-check"></i></span>
                                        <time dateTime="2022-05-24" className="date hcol not-xs">2 months ago</time>
                                    </div>
                                    <div className={classes.ratingCustomer}>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                    </div>
                                    <span className={classes.reviewWord}>Good</span>
                                </div>
                                <div className={reviewActive ? `${classes.dis}` : `${classes.writeReview}`}>
                                    <div className={`text-center ${classes.writeReviewRating}`}>
                                        <div className={classes.stars}>
                                            <span><i className="fa fa-star "></i></span>
                                            <span><i className="fa fa-star "></i></span>
                                            <span><i className="fa fa-star "></i></span>
                                            <span><i className="fa fa-star "></i></span>
                                            <span><i className="fa fa-star "></i></span>
                                            <span className={classes.userRatingStar}>Click the stars to rate this product</span>
                                            <p className={classes.oneStar}>Unacceptable</p>
                                            <p className={classes.twoStars}>Poor</p>
                                            <p className={classes.threeStars}>Average</p>
                                            <p className={classes.fourStars}>Good</p>
                                            <p className={classes.fiveStars}>Excellent</p>
                                        </div>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <input className={classes.publicNameInput} placeholder="Your public name or alias (required)" {...register("example", { required: true })} />
                                            <br/>
                                            <textarea className={classes.productReviewInput} 
                                            placeholder=
                                            "Write your product review here
                                            Describe for example:
                                            - Why you chose this rating
                                            - What you like or disliked
                                            Please don't write about the retailer, shopping experience or delivery"
                                            {...register("exampleRequired", { required: true })} 
                                            />
                                            <br />
                                            <div style={{border:'2px solid #ccc',width:'35%',margin:'auto',padding:'8px',borderTop:'none',borderRadius:'5px',marginTop:'-10px'}}>
                                                <label htmlFor="filePicker" style={{ background:"#fff", padding:"5px 10px",border:'1px solid #ccc',borderRadius:'10px',fontWeight:'bold',fontSize:'12px'}}>
                                                        Add Photo
                                                </label>
                                                <input  type="file" id="filePicker" style={{visibility:"hidden"}} name="img" accept="image/*" placeholder="Add Image"/>
                                            </div>
                                            {errors.exampleRequired && <span>This field is required</span>}
                                            <br/>
                                            <p>Pros & Cons</p>
                                            <input className={classes.pointAboutProduct} placeholder="a good point about this product" {...register("example1", { required: true })} />
                                            <button>Add</button>
                                            <br/>
                                            <input className={classes.pointAboutProduct} placeholder="a bad point about this product" {...register("example2", { required: true })} />
                                            <button>Add</button>
                                            {errors.example1 && <span>This field is required</span>}
                                            {errors.example2 && <span>This field is required</span>}
                                            <p>Your e-mail</p>
                                            <p>A valid e-mail address is required to verify this review. It will not be displayed or shared with a third party.</p>                                            
                                            <input className={classes.publicNameInput}
                                            placeholder="Email address (Required)"
                                            {...register("mail", { required: true,
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "invalid email address"
                                                } })} />
                                            <p>{errors.mail?.message}</p>
                                            <br/>
                                            <p className={classes.agreeTermsInput} >
                                                <input 
                                                {...register("checkbox", { required: true })}
                                                type="checkbox" id="vehicle1" name="agreeTerms"/> 
                                                I agree to the 
                                                <a href="#">terms & conditions</a>
                                            </p>
                                            <br/>
                                            <input className={classes.submitFormInput}  type="submit" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div  className={!active3 ? `${classes.QandA} row ${classes.dis}` : `${classes.QandA} row`}>

                            <div className={`col-md-5 ${classes.QandABtns}`}>
                                <button className={reviewActive ? `${classes.reviewBtn}` : `${classes.reviewBtnNone}`} onClick={displaReview}>Questions and Answers</button>
                                <button className={reviewActive2 ? `${classes.reviewBtn}` : `${classes.reviewBtnNone}`} onClick={displaReview2}>Write Reviews</button>
                            </div>

                            <div className={!reviewActive ? `${classes.dis}` : `${classes.userReviews} ${classes.divFirstOneToAsk}`}>
                                <button className={reviewActive2 ? `${classes.reviewBtn} ${classes.firstOneToAsk}` : `${classes.reviewBtnNone} ${classes.firstOneToAsk}`} onClick={displaReview2}>Be The First To Ask A Question</button>
                            </div>

                            <div className={reviewActive ? `${classes.dis}` : `${classes.writeReview}`}>
                                
                                <div className={`text-center ${classes.askQuestion}`}>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input className={classes.publicNameInput} placeholder="Your public name or alias (required)" {...register("example", { required: true })} />
                                        <br/>
                                        <textarea className={classes.productReviewInput} 
                                        placeholder=
                                        "Write your product review here
                                        Describe for example:
                                        - Why you chose this rating
                                        - What you like or disliked
                                        Please don't write about the retailer, shopping experience or delivery
                                        "
                                        {...register("exampleRequired", { required: true })} 
                                        />
                                        <br/>
                                        <div style={{border:'2px solid #ccc',width:'35%',margin:'auto',padding:'8px',borderTop:'none',borderRadius:'5px',marginTop:'-10px'}}>
                                            <label htmlFor="filePicker" style={{ background:"#fff", padding:"5px 10px",border:'1px solid #ccc',borderRadius:'10px',fontWeight:'bold',fontSize:'12px'}}>
                                                    Add Photo
                                            </label>
                                            <input  type="file" id="filePicker" style={{visibility:"hidden"}} name="img" accept="image/*" placeholder="Add Image"/>
                                        </div>
                                        {errors.exampleRequired && <span>This field is required</span>}
                                        <br/>
                                        <p>Name or Alias</p>
                                        <br/>
                                        <input className={classes.pointAboutProduct} placeholder="a bad point about this product" {...register("example2", { required: true })} />
                                        <button>Add</button>
                                        {errors.example1 && <span>This field is required</span>}
                                        {errors.example2 && <span>This field is required</span>}
                                        <p>Your e-mail</p>
                                        <p>A valid e-mail address is required to verify this review. It will not be displayed or shared with a third party.</p>                                            
                                        <input className={classes.publicNameInput}
                                        placeholder="Email address (Required)"
                                        {...register("mail", { required: true,
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "invalid email address"
                                            } })} />
                                        <p>{errors.mail?.message}</p>
                                        <br/>
                                        <p className={classes.agreeTermsInput} >
                                            <input 
                                            {...register("checkbox", { required: true })}
                                            type="checkbox" id="vehicle1" name="agreeTerms"/> 
                                            I agree to the 
                                            <a href="#">terms & conditions</a>
                                        </p>
                                        <br/>
                                        <input className={classes.submitFormInput}  type="submit" />
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div  className={!active4 ? `${classes.dis}` : ''}>
                            <div style={{padding:'20px'}}>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div style={{textAlign:'center'}}>
                                            <img src="//m.xcite.com/media/wysiwyg/our-services-pdp-tab/latest-min.png" style={{width:'25%', marginBottom:'20px', marginTop:'20px'}}/>
                                            <div className="" style={{boxShadow:'rgb(204 204 204) 1px 6px 19px',padding:'20px'}}>
                                                <h4>The Latest & Greatest</h4>
                                                <p>Here at X-cite, we keep our product catalog up to date with the newest product releases so you can have the latest and greatest technologies at your fingertips.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div style={{textAlign:'center'}}>
                                            <img src="//m.xcite.com/media/wysiwyg/our-services-pdp-tab/flash-min.png" style={{width:'25%', marginBottom:'20px', marginTop:'20px'}}/>
                                            <div className="" style={{boxShadow:'rgb(204 204 204) 1px 6px 19px',padding:'20px'}}>
                                                <h4>Outstanding Deals</h4>
                                                <p>From Flash Deals, Daily Deals, Weekly Deals to Monthly Deals. We have them all! Simply subscribe to our Newsletter and be the first to know about our amazing offers.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div style={{textAlign:'center'}}>
                                            <img src="https://m.xcite.com/media/wysiwyg/pages-img/shopwithus/pod_icon-2.png" style={{width:'25%', marginBottom:'20px', marginTop:'20px'}}/>
                                            <div className="" style={{boxShadow:'rgb(204 204 204) 1px 6px 19px',padding:'20px'}}>
                                                <h4>Pay On Delivery</h4>
                                                <p>You can choose to pay for your products at the time of delivery using Cash or Credit Card, which ever is convenient for you.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div style={{textAlign:'center'}}>
                                            <img src="//m.xcite.com/media/wysiwyg/our-services-pdp-tab/payment-min.png" style={{width:'30%', marginBottom:'20px', marginTop:'20px'}}/>
                                            <div className="" style={{boxShadow:'rgb(204 204 204) 1px 6px 19px',padding:'20px'}}>
                                                <h4>Secure Payments</h4>
                                                <p>As a leading retailer, X-cite ensures your peace of mind with our employment of advanced security technologies. We use the most secure payment gateways and make sure your purchases are safe.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div style={{textAlign:'center'}}>
                                            <img src="//m.xcite.com/media/wysiwyg/our-services-pdp-tab/delivery-min.png" style={{width:'25%', marginBottom:'20px', marginTop:'20px'}}/>
                                            <div className="" style={{boxShadow:'rgb(204 204 204) 1px 6px 19px',padding:'20px'}}>
                                                <h4>Free* & Fast Delivery Available</h4>
                                                <p>We strive to deliver your products as fast as possible. Products that require installation may take longer to deliver. Visit our *Terms & Conditions for more information.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div style={{textAlign:'center'}}>
                                            <img src="//m.xcite.com/media/wysiwyg/our-services-pdp-tab/install-min.png" style={{width:'20%', marginBottom:'20px', marginTop:'20px'}}/>
                                            <div className="" style={{boxShadow:'rgb(204 204 204) 1px 6px 19px',padding:'20px'}}>
                                                <h4>Free Installation</h4>
                                                <p>Products that require installation, such as TVs larger than 32-inch or air conditioning units, will be installed by our team of experts for free. We do not install Water Heaters (aka. Boilers).</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div style={{textAlign:'center'}}>
                                            <img src="//m.xcite.com/media/wysiwyg/our-services-pdp-tab/return-min.png" style={{width:'25%', marginBottom:'20px', marginTop:'20px'}}/>
                                            <div className="" style={{boxShadow:'rgb(204 204 204) 1px 6px 19px',padding:'20px'}}>
                                                <h4>Easy Returns</h4>
                                                <p>You can return or exchange your product within 14 days of purchase by calling customer care at 1803535 or to schedule a pick up from your home or send an email to Xsupport@xcite.com and one of our agents will get back to you as soon as possible. For more details, visit our Buyer Protection page and "Returns Are Easy" section in our Terms & Conditions page.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div style={{textAlign:'center'}}>
                                            <img src="//m.xcite.com/media/wysiwyg/our-services-pdp-tab/warranty-min.png" style={{width:'20%', marginBottom:'20px', marginTop:'20px'}}/>
                                            <div className="" style={{boxShadow:'rgb(204 204 204) 1px 6px 19px',padding:'20px'}}>
                                                <h4>Extended Warranty</h4>
                                                <p>Think you might need an extended warranty on the product you are about to purchase? Well, you're in luck! X-cite offers up to 5 Years of extended warranty on top of the 1 Year warranty it already offers! Check out our Terms & Conditions to learn more.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div style={{textAlign:'center'}}>
                                            <img src="https://m.xcite.com/media/wysiwyg/pages-img/shopwithus/easy_credit_icon-2.png" style={{width:'25%', marginBottom:'20px', marginTop:'20px'}}/>
                                            <div className="" style={{boxShadow:'rgb(204 204 204) 1px 6px 19px',padding:'20px'}}>
                                                <h4>Easy Credit</h4>
                                                <p>Buying electronics from X-cite just got easier! Buy on Easy Credit and pay for your purchases through easy and flexible monthly installments starting at an affordable KD 5 per month.</p>
                                            </div>
                                        </div>
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

export default ProTabs;