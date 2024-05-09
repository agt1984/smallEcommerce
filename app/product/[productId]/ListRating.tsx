"use client";

import Heading from "@/app/components/Heading";
import moment from "moment";
import { Rating } from "@mui/material";


interface ListRatingProps {
    product: any;
}

const ListRating: React.FC<ListRatingProps> = ({product}) => {
    return ( 
       <div>
        <Heading title="Product Review"/>
        <div className="text-sm mt-2">
            {product.reviews && product.reviews.map((review: any) => {
                return <div key={review.id} className="max-w-300px">
                    <div className="flex gap-2 items-center">
                        <div>Avatar</div>
                        <div className="font-semibold">{review?.user.name}</div>
                        <div className="font-ligth">{moment(review.createdDate).fromNow()}</div>
                    </div>
                    <div className="mt-2">
                        <Rating value = {review.rating} readOnly/>
                        <div className="ml-2">{review.comment}</div>
                        <hr className="mt-4 mb-4" />
                    </div>
                </div>
            })}
        </div>
       </div> 
    );
}
 
export default ListRating;