import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";

export const HeroPage = () => {

  const { id } = useParams();

  const navigate = useNavigate();
  
  const handleNavigateBack = () => {
    navigate(-1);
  }

  
  const hero = useMemo(() => getHeroById(id), [id]);
  const {superhero, alter_ego, publisher, first_appearance, characters} = hero;
  
  if (!hero) return (<Navigate to={'/marvel'} />)

  return (
    <div className="row mt-5">

      <div className="col-4">

        <img
          className="img-thumbnail animate__animated animate__fadeInLeft"
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
        />

      </div>

      <div className="col-8 animate__animated animate__fadeInRight">

        <h3>{ superhero }</h3>
        <hr />

        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> { alter_ego }</li>
          <li className="list-group-item"><b>Publisher:</b> { publisher }</li>
          <li className="list-group-item"><b>First appearance:</b> { first_appearance }</li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{ characters }</p>

        <button
          className="btn btn-outline-primary"
          onClick={handleNavigateBack}
        >
          Back
        </button>

      </div>

    </div>
  )
}
