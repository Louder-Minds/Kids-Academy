import styled from 'styled-components';
import { device } from '../../../util/screensizes';
import { colors } from '../../../util/styling_vars';
import Img from 'gatsby-image';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    max-width: 400px;

    h3 {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
    }

    .titelcont {
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        justify-items: center;
        min-height: 80px;
        background-color: rgb(0, 0, 0, 0.05);
        h3 {
            margin-bottom: 0px;
        }
        padding: 0 5%;
    }

    p {
        display: none;
    }

    div {
        position: relative;
    }

    ul {
        margin: 0;
        margin-top: 5%;
        min-height: 175px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        li {
            display: flex;
            align-items: center;
            font-size: 16px;
            margin-bottom: 5%;
            font-weight: 500;
            color: ${colors.turqouise};

            img {
                margin-right: 8px;
                width: 8px;
            }
        }
    }

    button {
        width: 100%;
    }

    :hover {
        cursor: pointer;
    }

    @media ${device.tablet} {
        ul {
            min-height: 150px;
            li {
                font-size: 14px;
            }
        }
    }
`;

export const StyledImg = styled(Img)`
    height: 200px !important;

    div,
    picture img,
    img {
        min-width: 100% !important;
        width: 100% !important;
        max-width: 100% !important;
        height: 200px !important;
        max-height: 200px !important;
        min-height: 200px !important;
        object-fit: cover !important;
    }

    @media ${device.tablet} {
        div,
        picture img,
        img {
            min-height: 200px !important;
            height: 200px !important;
            max-height: 200px !important;
        }
    }
`;

export const Flag = styled.span`
    position: absolute;
    bottom: 0;
    right: 0;
    display: block;
    width: 50px;
    height: 30px;
    background: ${(props) =>
        props.english
            ? 'url(https://la-rose-passementarie.com/files/20537/afbeeldingen/9t4ezaalc.png)'
            : "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAJFBMVEWvGychRoz+/v6vGSX/+/37/P8aRpH/9vgmRH6kFyP///35//9qTZEIAAABT0lEQVR4nO3QC2rDMBBAwa37T+9/35amCrYe9AQzEIIjr5a8GQAAAAAAAAAAAAAAAAAAAOBfz+zmk928s5svdvPCbg52mpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJ/Ta5/fj7Xp/zT8dxeV7n6+y4rdH7C4/xNbRmL5edXuua6/na/Lj9vnXbcpxmT5etHWv8cfv1/54bzCu7+WA3b+zmiZ0mpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSX0Ddov4F+NoZDcAAAAASUVORK5CYII=')"};
    background-size: cover;
`;
