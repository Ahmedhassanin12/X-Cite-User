import React from "react";
import { useEffect, useState } from "react";
import classes from "./ProductDetailes.module.css";
import { useForm } from "react-hook-form";
import ProDiscription from "./proDiscription";
import ProSpecification from "./proSpecification";
import { useParams } from "react-router-dom";
import { addReview } from "../../services/ReviewService";
import db from "../../firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { UserAuth } from "../../context/AuthContext";


const ProTabs = ({Product, attributes}) => {
    const params = useParams()// params to catch prdid
    const [count, setCount] = useState(1)
    const [digitalCard, setDigitalCard] = useState({images:[]})
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    // console.log(product)
    const [active, setActive] = useState(true)
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [reviewActive, setReviewActive] = useState(true)//
    const [reviewActive2, setReviewActive2] = useState(false);//
    ///
    const [ratingValue, setRatingValue] = useState(1);
    const [review, setReview] = useState([])
    const [hover, setHover] = useState(-1);
    ///
    //register : catch input by its name(ely ent katbo), handelsubmit : get data he entered when click submit,
    //reset : delete dta from form after submit, formstate: validate inputs 
    // const onSubmit = data => console.log(data);
    
    // useEffect(()=>
    // onSnapshot(doc(db, 'Products/', `${params.id}`),(snapshot)=>{
    //     setDigitalCard(snapshot.data())
    // })
    // ,[]);
   
  useEffect(
    () =>
      onSnapshot(doc(db, "Products/", `${params.id}`), (snapshot) => {
        setDigitalCard(snapshot.data());
      }),
    []
  );
  const onSubmit = (data) => {
    // console.log(data)
    const review = {
      idOfProduct: `${params.id}`,

      name: data.name,

      review: data.review,

      good_point: data.good_point,

      bad_point: data.bad_point,

      email: data.email,

      ratingValue: ratingValue,
    };
    // console.log(review)
    addReview(review); //send data to firebase in reviewservice
    reset();
  };
  useEffect(() => {
    const id = localStorage.getItem("id");

    const data = doc(db, "users", `${id}`);

    getDoc(data).then((res) => {
      let data = res.data();

      const fullDataOfReview = data.review;

      fullDataOfReview.filter((n) => {
        if (n.idOfProduct === `${params.id}`) {
          const reviewData = [
            {
              name: n.name,
              good_point: n.good_point,
              bad_point: n.bad_point,
              ratingValue: n.ratingValue,
              review: n.review,
              email: n.email,
            },
          ];
          setReview(reviewData);
        } else {
          // setProduct([])
        }
      });
    });

    // setNames(snapshot.docs.map((doc)=>(doc.data().name))),

    // setImages(snapshot.docs.map((doc)=>(doc.data().img)))

    // })
  });

  const handleClick = () => {
    setActive((active) => !active);
    setActive1((active1) => false);
    setActive2((active2) => false);
    setActive3((active4) => false);
    setActive4((active4) => false);
  };
  const handleClick1 = () => {
    setActive((active) => false);
    setActive1((active1) => !active1);
    setActive2((active2) => false);
    setActive3((active2) => false);
    setActive4((active2) => false);
  };
  const handleClick2 = () => {
    setActive((active) => false);
    setActive1((active1) => false);
    setActive2((active2) => !active2);
    setActive3((active2) => false);
    setActive4((active2) => false);
  };
  const handleClick3 = () => {
    setActive((active) => false);
    setActive1((active1) => false);
    setActive2((active2) => false);
    setActive3((active2) => !active3);
    setActive4((active2) => false);
  };
  const handleClick4 = () => {
    setActive((active) => false);
    setActive1((active1) => false);
    setActive2((active2) => false);
    setActive3((active2) => false);
    setActive4((active2) => !active4);
  };
  const displaReview = () => {
    setReviewActive((reviewActive) => !reviewActive);
    setReviewActive2((reviewActive2) => false);
  };
  const displaReview2 = () => {
    setReviewActive2((reviewActive2) => !reviewActive2);
    setReviewActive((reviewActive) => false);
  };

  /////////////////////////////
  const labels = {
    1: "Useless",
    2: "Poor",
    3: "Ok",
    4: "Good",
    5: "Excellent",
  };

  function getLabelText(ratingValue) {
    return `${ratingValue} Star${ratingValue !== 1 ? "sss" : ""}, ${
      labels[ratingValue]
    }`;
  }

  const handleChangeRating = (newValue) => {
    setRatingValue(newValue);
  };
  ////////////////////////
  return (
    <>
      <div
        className={classes.bigContainer + " w-100 h-auto px-0 pb-0 pt-0 m-0"}
      >
        <p className={"px-3 py-2 m-0 " + classes.proPath}>
          {" "}
          X-Cite {">"} {digitalCard.categoryName} {">"} {digitalCard.name}{" "}
        </p>
        <hr className="mt-0" />
        {/* ====== Product General Detailes ================================================= */}

        <div className="row p-0 m-0">
          <div className={`col-lg-4 col-sm-7 order-1 px-sm-4 px-2 py-2`}>
            <div className={classes.image}>
              <img src={digitalCard.images[0]} height="400px" />
            </div>
          </div>
          <div className="col-lg-5 col-sm-12 order-lg-2 order-sm-3 order-2 px-sm-4 px-3 py-2">
            <div className={classes.centerDetails}>
              <h5>{digitalCard.name}</h5>
              <div>
                <p style={{ fontSize: "0.8rem", color: "gray" }}>
                  <b>Brand: </b>
                  <span>{digitalCard.brandName}</span>
                  <b className="ms-3">sku: </b>
                  <span>{digitalCard.sku}</span>
                </p>
                <div className={classes.rating}>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <div className={classes.inStock}>
                  <i className="fa fa-check-circle" aria-hidden="true"></i>
                  {digitalCard.quantity > 5
                    ? "In Stock"
                    : digitalCard.quantity == 0
                    ? "Sorry!,This Product is Not Available Now!"
                    : `Hurry up, It's available only ${digitalCard.quantity} items.`}
                </div>
              </div>
              <hr></hr>
              <div className={classes.pricing}>
                {digitalCard.discount ? (
                  <>
                    <span className={classes.price + " me-1"}>
                      {(digitalCard.price * digitalCard.discount) / 100} KD
                    </span>
                    <span className={classes.oldPrice + " me-1"}>
                      {digitalCard.price} KD
                    </span>
                    <span className={classes.discount}>
                      save {digitalCard.discount}%
                    </span>
                  </>
                ) : (
                  <span className={classes.price}>{digitalCard.price} KD</span>
                )}
              </div>
              <hr className="mt-1" />
              <div className={classes.overview}>
                <h6>Quick Overview</h6>
                <p className="pe-5 w-75">{digitalCard.description}</p>
                {/* <ul>
                                <li>Receive Code digitally</li>
                                <li>View code via "My Orders" "My Vitual Cards"</li>
                                <li>Fast & Reliable</li>
                                <li>For US Accounts Only</li>
                            </ul> */}
                <div className={classes.howDoIGet + " ps-2 py-1"}>
                  How do I get it?
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-5 order-lg-3 order-sm-2 order-3 p-3">
            <div className={classes.rightAddToCart + " w-100"}>
              <div className={classes.btns + " mt-2 mb-3"}>
                {/* <button onClick={} className={classes.decrement}>
                  -
                </button> */}
                <span className={classes.count}>{count}</span>
                {/* <button onClick={incrementCount} className={classes.increment}>
                  +
                </button> */}
              </div>
              <div className="w-100 h-auto px-3 mb-3">
                <button className={classes.addToCardBtn + " py-1"}>
                  <i className="fa fa-shopping-cart fa-fw me-2"></i>Add to Card
                </button>
              </div>
              <div className="w-100 h-auto px-3 mb-3">
                <button className={classes.clickBuyBtn + " py-1"}>
                  <i className="fa fa-tachometer fa-fw me-2"></i>1-Click Buy
                </button>
              </div>
              <div className={classes.soldFulfilled + " w-100 mx-0 mb-3 px-3"}>
                <p className="my-0">
                  Sold By: <b className="text-primary">{digitalCard.seller}</b>
                </p>
                <p className="my-0">
                  Fulfilled By: <b className="text-dark">X-cite</b>
                </p>
              </div>
              <div className={`col-12 px-3  ${classes.wishlistCompare}`}>
                <div style={{ width: "47%" }}>
                  <p className="px-2 py-2 m-0">
                    <i class="far fa-heart me-1"></i>Add to Wishlist
                  </p>
                  <span className="my-0">See Wishlist</span>
                </div>
                <div style={{ width: "47%" }}>
                  <p className="px-2 py-2 m-0">
                    <i className="far fa-file me-1"></i>Add to Compare
                  </p>
                  <span className="my-0">See Compare List</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* ====== Product More Special Detailes ============================================= */}
        <div className={classes.aboutProduct}>
          <div className="row p-0 m-0">
            <div className="col-lg-10 col-12 p-0">
              <div className={classes.informationBtns + " p-0 m-0"}>
                <button
                  onClick={handleClick}
                  className={
                    !active
                      ? `col-lg-3 col-6 px-sm-3 px-1 py-2 `
                      : `${classes.borderBgcColor} px-sm-3 px-1 py-2 col-lg-3 col-6`
                  }
                >
                  Product Description
                </button>
                <button
                  onClick={handleClick1}
                  className={
                    !active1
                      ? `col-lg-3 col-6 px-sm-3 px-1 py-2 `
                      : `${classes.borderBgcColor} px-sm-3 px-1 py-2 col-lg-3 col-6`
                  }
                >
                  Product Specifications
                </button>
                <button
                  onClick={handleClick2}
                  className={
                    !active2
                      ? `col-lg-2 col-4 px-sm-3 px-1 py-2 `
                      : `${classes.borderBgcColor} px-sm-3 px-1 py-2 col-lg-2 col-4`
                  }
                >
                  Reviews
                </button>
                <button
                  onClick={handleClick3}
                  className={
                    !active3
                      ? `col-lg-2 col-4 px-sm-3 px-1 py-2 `
                      : `${classes.borderBgcColor} px-sm-3 px-1 py-2 col-lg-2 col-4`
                  }
                >
                  Q & A
                </button>
                <button
                  onClick={handleClick4}
                  className={
                    !active4
                      ? `col-lg-2 col-4 px-sm-3 px-1 py-2 `
                      : `${classes.borderBgcColor} px-sm-3 px-1 py-2 col-lg-2 col-4`
                  }
                >
                  Our Services
                </button>
              </div>

              <div
                className={
                  !active
                    ? `${classes.productDescription} d-none`
                    : `${classes.productDescription} p-3`
                }
              >
                <ProDiscription
                  Product={Product}
                  category={Product.categoryName}
                />
              </div>

              <div
                className={
                  !active1
                    ? `${classes.productSpecification} d-none`
                    : `${classes.productSpecification} p-3`
                }
              >
                <p>Information on {Product.name}</p>
                <p className={classes.bold + " fs-5 mt-3 mb-1 ps-2"}>General</p>
                <ProSpecification Product={Product} attributes={attributes} />
              </div>

              <div
                className={
                  !active2
                    ? `${classes.reviews} row ${classes.dis}`
                    : `${classes.reviews} row`
                }
              >
                <div className={`col-md-2 ${classes.rating}`}>
                  <p className={classes.bold}>4.9</p>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  {/* <Stack spacing={2}>
                                <Rating/>
                                </Stack> */}
                  <p>Based on 79 rating</p>
                </div>

                <div className={`col-md-4 ${classes.ratingCol}`}>
                  <div className="tf-distribution tf-dist-user">
                    <table>
                      <tbody>
                        <tr>
                          <td className={classes.range}>5 ☆</td>
                          <td title="67/75 (89%)" className="bar">
                            <div
                              style={{
                                width: "200px !important",
                                backgroundColor: "#00de01",
                              }}
                              className={classes.ratingProgressFiveStars}
                            ></div>
                          </td>
                        </tr>
                        <tr>
                          <td class={classes.range}>4 ☆</td>
                          <td title="7/75 (9%)" className="bar">
                            <div
                              style={{
                                width: "20px !important",
                                backgroundColor: "#bcee01",
                              }}
                              className={classes.ratingProgressFourStars}
                            ></div>
                          </td>
                        </tr>
                        <tr>
                          <td className={classes.range}>3 ☆</td>
                          <td title="0/75 (0%)" className="bar">
                            <div
                              style={{
                                width: "0px !important",
                                backgroundColor: "#00de01",
                              }}
                              className={classes.ratingProgressThreeStars}
                            ></div>
                          </td>
                        </tr>
                        <tr>
                          <td class={classes.range}>2 ☆</td>
                          <td title="0/75 (0%)" className="bar">
                            <div
                              style={{
                                width: "0px !important",
                                backgroundColor: "#00de01",
                              }}
                              className={classes.ratingProgressTwoStars}
                            ></div>
                          </td>
                        </tr>
                        <tr>
                          <td class={classes.range}>1 ☆</td>
                          <td title="1/75 (1%)" className="bar">
                            <div
                              style={{
                                width: "30px !important",
                                backgroundColor: "#e8afb1",
                              }}
                              className={classes.ratingProgressOneStars}
                            ></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className={`col-md-12  ${classes.customersReviews}`}>
                  <div className={`col-md-12 ${classes.reviewBtns}`}>
                    <button
                      className={
                        reviewActive
                          ? `${classes.reviewBtn}`
                          : `${classes.reviewBtnNone}`
                      }
                      onClick={displaReview}
                    >
                      User Reviews
                    </button>
                    <button
                      className={
                        reviewActive2
                          ? `${classes.reviewBtn}`
                          : `${classes.reviewBtnNone}`
                      }
                      onClick={displaReview2}
                    >
                      Write Reviews
                    </button>
                  </div>

                  {/* //////////////////////////                         */}
                  <div
                    className={
                      !reviewActive
                        ? `${classes.dis}`
                        : `${classes.userReviews}`
                    }
                  >
                    {review.map((rev) => (
                      <>
                        <div
                          style={{ display: "inline-block" }}
                          className={classes.user}
                        >
                          <div
                            className={classes.logo}
                            style={{
                              backgroundColor: " rgb(152, 194, 132) !important",
                            }}
                          >
                            {rev.name ? rev.name.slice(0, 1) : ""}
                          </div>
                          <h5>{rev.name}</h5>

                          <span className={classes.verified}>
                            <i class="fa-solid fa-check"></i>
                          </span>
                          <time
                            datetime="2022-05-24"
                            class="date hcol not-xs"
                          ></time>
                        </div>
                        <div className={classes.ratingCustomer}>
                          <Rating value={rev.ratingValue} readOnly />
                          <p>{rev.review}</p>
                          <p>{rev.good_point}</p>
                          <p>{rev.bad_point}</p>
                        </div>
                      </>
                    ))}
                  </div>

                  <div
                    className={
                      reviewActive ? `${classes.dis}` : `${classes.writeReview}`
                    }
                  >
                    <div className={`text-center ${classes.writeReviewRating}`}>
                      <div className={classes.stars}></div>

                      <form onSubmit={handleSubmit(onSubmit)}>
                        <Rating
                          name="hover-feedback"
                          value={ratingValue}
                          onChangeActive={(event, newHover) => {
                            setHover(newHover);
                          }}
                          onChange={(event, newValue) =>
                            handleChangeRating(newValue)
                          } //store value of rating
                          getLabelText={getLabelText} //write value of rating below starrs
                          // emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {ratingValue !== null && (
                          <Box sx={{ ml: 1 }}>
                            {labels[hover !== -1 ? hover : ratingValue]}
                          </Box>
                        )}
                        <input
                          className={classes.publicNameInput}
                          placeholder="Your public name or alias (required)"
                          {...register("name", { required: true })}
                        />

                        <br />

                        <input
                          className={classes.productReviewInput}
                          placeholder="Write your product review here Describe for example: - Why you chose this rating - What you like or disliked Please don't write about the retailer, shopping experience or delivery"
                          {...register("review")}
                        />

                        <br />

                        {errors.review && <span>This field is required</span>}
                        <br />
                        <p>Pros & Cons</p>
                        <input
                          className={classes.pointAboutProduct}
                          placeholder="a good point about this product"
                          {...register("good_point")}
                        />
                        <br />
                        <input
                          className={classes.pointAboutProduct}
                          placeholder="a bad point about this product"
                          {...register("bad_point")}
                        />

                        {errors.example1 && <span>This field is required</span>}
                        <p>Your e-mail</p>
                        <p>
                          A valid e-mail address is required to verify this
                          review. It will not be displayed or shared with a
                          third party.
                        </p>

                        <input
                          className={classes.publicNameInput}
                          placeholder="Email address"
                          {...register("email", {
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,

                              message: "invalid email address",
                            },
                          })}
                        />

                        <p>{errors.mail?.message}</p>
                        <br />

                        <p className={classes.agreeTermsInput}>
                          <input
                            // {...register("checkbox")}

                            type="checkbox"
                            name="agreeTerms"
                          />
                          I agree to the
                          <a href="#">terms & conditions</a>
                        </p>

                        <br />
                        <input
                          className={classes.submitFormInput}
                          type="submit"
                        />
                      </form>
                    </div>

                    {/* /////////////////////////                  */}
                  </div>
                </div>
              </div>

              <div
                className={
                  !active3
                    ? `${classes.QandA} row ${classes.dis}`
                    : `${classes.QandA} row`
                }
              >
                <div className={`col-md-5 ${classes.QandABtns}`}>
                  <button
                    className={
                      reviewActive
                        ? `${classes.reviewBtn}`
                        : `${classes.reviewBtnNone}`
                    }
                    onClick={displaReview}
                  >
                    Questions and Answers
                  </button>
                  <button
                    className={
                      reviewActive2
                        ? `${classes.reviewBtn}`
                        : `${classes.reviewBtnNone}`
                    }
                    onClick={displaReview2}
                  >
                    Write Reviews
                  </button>
                </div>

                <div
                  className={
                    !reviewActive
                      ? `${classes.dis}`
                      : `${classes.userReviews} ${classes.divFirstOneToAsk}`
                  }
                >
                  <button
                    className={
                      reviewActive2
                        ? `${classes.reviewBtn} ${classes.firstOneToAsk}`
                        : `${classes.reviewBtnNone} ${classes.firstOneToAsk}`
                    }
                    onClick={displaReview2}
                  >
                    Be The First To Ask A Question
                  </button>
                </div>

                <div
                  className={
                    reviewActive ? `${classes.dis}` : `${classes.writeReview}`
                  }
                >
                  <div className={`text-center ${classes.askQuestion}`}>
                    {/* <form onSubmit={handleSubmit(onSubmit)}>
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
                                        <div style={{border:'2px solid #ccc',width:'50%',margin:'auto',padding:'8px',borderTop:'none',borderRadius:'5px',marginTop:'-10px'}}>
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
                                    </form> */}
                  </div>
                </div>
              </div>

              <div className={!active4 ? `${classes.dis}` : ""}>
                <div style={{ padding: "20px" }}>
                  <div className="row">
                    <div className="col-md-4">
                      <div style={{ textAlign: "center" }}>
                        <img
                          src="//m.xcite.com/media/wysiwyg/our-services-pdp-tab/latest-min.png"
                          style={{
                            width: "25%",
                            marginBottom: "20px",
                            marginTop: "20px",
                          }}
                        />
                        <div
                          className=""
                          style={{
                            boxShadow: "rgb(204 204 204) 1px 6px 19px",
                            padding: "20px",
                          }}
                        >
                          <h4>The Latest & Greatest</h4>
                          <p>
                            Here at X-cite, we keep our product catalog up to
                            date with the newest product releases so you can
                            have the latest and greatest technologies at your
                            fingertips.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div style={{ textAlign: "center" }}>
                        <img
                          src="//m.xcite.com/media/wysiwyg/our-services-pdp-tab/flash-min.png"
                          style={{
                            width: "25%",
                            marginBottom: "20px",
                            marginTop: "20px",
                          }}
                        />
                        <div
                          className=""
                          style={{
                            boxShadow: "rgb(204 204 204) 1px 6px 19px",
                            padding: "20px",
                          }}
                        >
                          <h4>Outstanding Deals</h4>
                          <p>
                            From Flash Deals, Daily Deals, Weekly Deals to
                            Monthly Deals. We have them all! Simply subscribe to
                            our Newsletter and be the first to know about our
                            amazing offers.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div style={{ textAlign: "center" }}>
                        <img
                          src="https://m.xcite.com/media/wysiwyg/pages-img/shopwithus/pod_icon-2.png"
                          style={{
                            width: "25%",
                            marginBottom: "20px",
                            marginTop: "20px",
                          }}
                        />
                        <div
                          className=""
                          style={{
                            boxShadow: "rgb(204 204 204) 1px 6px 19px",
                            padding: "20px",
                          }}
                        >
                          <h4>Pay On Delivery</h4>
                          <p>
                            You can choose to pay for your products at the time
                            of delivery using Cash or Credit Card, which ever is
                            convenient for you.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div style={{ textAlign: "center" }}>
                        <img
                          src="//m.xcite.com/media/wysiwyg/our-services-pdp-tab/payment-min.png"
                          style={{
                            width: "30%",
                            marginBottom: "20px",
                            marginTop: "20px",
                          }}
                        />
                        <div
                          className=""
                          style={{
                            boxShadow: "rgb(204 204 204) 1px 6px 19px",
                            padding: "20px",
                          }}
                        >
                          <h4>Secure Payments</h4>
                          <p>
                            As a leading retailer, X-cite ensures your peace of
                            mind with our employment of advanced security
                            technologies. We use the most secure payment
                            gateways and make sure your purchases are safe.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div style={{ textAlign: "center" }}>
                        <img
                          src="//m.xcite.com/media/wysiwyg/our-services-pdp-tab/delivery-min.png"
                          style={{
                            width: "25%",
                            marginBottom: "20px",
                            marginTop: "20px",
                          }}
                        />
                        <div
                          className=""
                          style={{
                            boxShadow: "rgb(204 204 204) 1px 6px 19px",
                            padding: "20px",
                          }}
                        >
                          <h4>Free* & Fast Delivery Available</h4>
                          <p>
                            We strive to deliver your products as fast as
                            possible. Products that require installation may
                            take longer to deliver. Visit our *Terms &
                            Conditions for more information.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div style={{ textAlign: "center" }}>
                        <img
                          src="//m.xcite.com/media/wysiwyg/our-services-pdp-tab/install-min.png"
                          style={{
                            width: "20%",
                            marginBottom: "20px",
                            marginTop: "20px",
                          }}
                        />
                        <div
                          className=""
                          style={{
                            boxShadow: "rgb(204 204 204) 1px 6px 19px",
                            padding: "20px",
                          }}
                        >
                          <h4>Free Installation</h4>
                          <p>
                            Products that require installation, such as TVs
                            larger than 32-inch or air conditioning units, will
                            be installed by our team of experts for free. We do
                            not install Water Heaters (aka. Boilers).
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div style={{ textAlign: "center" }}>
                        <img
                          src="//m.xcite.com/media/wysiwyg/our-services-pdp-tab/return-min.png"
                          style={{
                            width: "25%",
                            marginBottom: "20px",
                            marginTop: "20px",
                          }}
                        />
                        <div
                          className=""
                          style={{
                            boxShadow: "rgb(204 204 204) 1px 6px 19px",
                            padding: "20px",
                          }}
                        >
                          <h4>Easy Returns</h4>
                          <p>
                            You can return or exchange your product within 14
                            days of purchase by calling customer care at 1803535
                            or to schedule a pick up from your home or send an
                            email to Xsupport@xcite.com and one of our agents
                            will get back to you as soon as possible. For more
                            details, visit our Buyer Protection page and
                            "Returns Are Easy" section in our Terms & Conditions
                            page.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div style={{ textAlign: "center" }}>
                        <img
                          src="//m.xcite.com/media/wysiwyg/our-services-pdp-tab/warranty-min.png"
                          style={{
                            width: "20%",
                            marginBottom: "20px",
                            marginTop: "20px",
                          }}
                        />
                        <div
                          className=""
                          style={{
                            boxShadow: "rgb(204 204 204) 1px 6px 19px",
                            padding: "20px",
                          }}
                        >
                          <h4>Extended Warranty</h4>
                          <p>
                            Think you might need an extended warranty on the
                            product you are about to purchase? Well, you're in
                            luck! X-cite offers up to 5 Years of extended
                            warranty on top of the 1 Year warranty it already
                            offers! Check out our Terms & Conditions to learn
                            more.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div style={{ textAlign: "center" }}>
                        <img
                          src="https://m.xcite.com/media/wysiwyg/pages-img/shopwithus/easy_credit_icon-2.png"
                          style={{
                            width: "25%",
                            marginBottom: "20px",
                            marginTop: "20px",
                          }}
                          alt={"Credit icon"}
                        />
                        <div
                          className=""
                          style={{
                            boxShadow: "rgb(204 204 204) 1px 6px 19px",
                            padding: "20px",
                          }}
                        >
                          <h4>Easy Credit</h4>
                          <p>
                            Buying electronics from X-cite just got easier! Buy
                            on Easy Credit and pay for your purchases through
                            easy and flexible monthly installments starting at
                            an affordable KD 5 per month.
                          </p>
                        </div>
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
  );
};
export default ProTabs;

