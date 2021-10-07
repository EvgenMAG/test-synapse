import React, { useEffect, useState } from 'react';
import data from '../../DB/imdb.json';

import ThumbDownTwoToneIcon from '@material-ui/icons/ThumbDownAlt';
import styled from 'styled-components';

import Modal from '../Modal/Modal';
import Load from '../Loader/Loader';

import device from '../../devices/device';

const Card = styled.li`
  width: calc((100% - 60px) / 2);

  margin: 15px;
  list-style: none;
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  cursor: pointer;
`;
const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  max-height: 100%;
  opacity: 0.7;
`;

const Title = styled.h2`
  position: absolute;
  text-transform: uppercase;
  top: 15px;
  left: 10px;
  font-size: 15px;
  font-weight: 700px;
  color: white;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 5px;
  border: 1px solid black;
  background-color: tomato;
`;

const DescriptionTitle = styled.h3`
  display: inline-block;
  margin: 0px;
  margin-bottom: 5px;
  font-size: 10px;
  font-weight: 600px;
  color: black;
`;
const Description = styled.p`
  display: inline-block;
  margin: 0px;
  margin-bottom: 5px;
  font-size: 10px;
  font-weight: 400px;
  color: grey;
`;

export default function ContactList() {
  const [showModal, setshowModal] = useState(false);
  const [writer, setWriter] = useState('');
  const [actors, setActors] = useState('');
  const [plot, setPlot] = useState('');
  const [rating, setRating] = useState('');
  const [onPage, setOnPage] = useState([]);
  const [perPage, setPerPage] = useState(20);

  useEffect(() => {
    setOnPage(data.slice(0, perPage));
  }, [perPage]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = e => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      data.length > onPage.length
    ) {
      setPerPage(prevsatate => prevsatate + 20);
    }
  };

  function togleModal() {
    setshowModal(!showModal);
    setWriter('');
    setActors('');
    setPlot('');
    setRating('');
  }

  function onImageClick(writer, actors, plot, rating) {
    togleModal();
    setWriter(writer);
    setActors(actors);
    setPlot(plot);
    setRating(rating);
  }

  return (
    <>
      {!onPage ? (
        <Load />
      ) : (
        onPage.map(item => {
          const {
            id,
            writer,
            actors,
            plot,
            imdbrating,
            title,
            poster,
            director,
            year,
            genre,
          } = item;

          return (
            <Card key={id}>
              <Link
                onClick={() => onImageClick(writer, actors, plot, imdbrating)}
              >
                <ImageContainer>
                  <Image src={poster} />
                  <Title>{title}</Title>
                  {imdbrating < 7 && (
                    <ThumbDownTwoToneIcon
                      style={{
                        fontSize: 'large',
                        position: 'absolute',
                        color: 'white',
                        top: '10px',
                        right: '10px',
                      }}
                    />
                  )}
                </ImageContainer>

                <DescriptionContainer>
                  <DescriptionTitle>
                    Director: <Description>{director}</Description>
                  </DescriptionTitle>
                  <DescriptionTitle>
                    Year: <Description>{year}</Description>
                  </DescriptionTitle>
                  <DescriptionTitle>
                    Genre: <Description>{genre}</Description>
                  </DescriptionTitle>
                </DescriptionContainer>
              </Link>
            </Card>
          );
        })
      )}

      {showModal && (
        <Modal onClose={togleModal}>
          {writer && (
            <div>
              <h2>{`Rating: ${rating}`}</h2>
              <h3>{`Writer: ${writer}`}</h3>
              <p>{`Actors: ${actors}`}</p>
              <p>{`Plot: ${plot}`}</p>
            </div>
          )}
        </Modal>
      )}
    </>
  );
}
