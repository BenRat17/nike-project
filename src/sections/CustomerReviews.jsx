import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">

      <h3 className="font-palanquin text-center text-4xl font-bold">
      What Do Our
        <span className="text-blue-400"> Patrons </span>
      Say?
      </h3>

      <p className="info-text m-auto mt-4 max-w-lg text-center">Hear genuine stories from our satisfied patrons
         about their extraordinary experiences here at the Forge.
      </p>

      <div className="mt-24 flexl flex-1 justify-evenly items-center max-lg:flex-col gap-12">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>

    </section>
  )
}

export default CustomerReviews