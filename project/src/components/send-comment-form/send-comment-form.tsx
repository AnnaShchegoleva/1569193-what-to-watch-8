import {useState, useRef, FormEvent} from 'react';
import {useDispatch} from 'react-redux';
import {addReviewAction} from '../../store/api-actions';


const MAX_COMMENT_TEXT = 400;

type SendCommentFormProps = {
  filmId: number;
};

function SendCommentForm ({filmId}: SendCommentFormProps): JSX.Element {
  const [comment, setReview] = useState('');
  const [rating, setRating] = useState(5);

  const addReviewBtnRef = useRef<HTMLButtonElement>(null);
  const dispatch = useDispatch();

  const isFormValid = Boolean(rating === undefined || comment.length < 50 || comment.length > 400);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (addReviewBtnRef.current) {
      addReviewBtnRef.current.disabled = true;
    }
    dispatch(addReviewAction(filmId, {
      rating,
      comment,
    }, (isSuccess) => {
      if (isSuccess) {
        setRating(5);
        setReview('');
      } else {
        if (addReviewBtnRef.current) {
          addReviewBtnRef.current.disabled = false;
        }
      }
    }));
  };


  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {Array.from({ length: 10 }, (_, i) => i + 1).reverse().map((it) => (
              [
                <input key={`input-${it}`} className="rating__input" id={`star-${it}`} type="radio" name="rating" value={it} checked={rating === it} onChange={() => setRating(it)} />,
                <label key={`label-${it}`} className="rating__label" htmlFor={`star-${it}`}>Rating {it}</label>,
              ]
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" maxLength={MAX_COMMENT_TEXT} value={comment} onChange={(event) => setReview(event.target.value)}></textarea>
          <div className="add-review__submit">
            <button ref={addReviewBtnRef} className="add-review__btn" type="submit" disabled={isFormValid}>Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default SendCommentForm;
