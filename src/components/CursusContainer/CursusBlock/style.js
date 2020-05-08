import styled from 'styled-components';

import { device } from '../../../util/screensizes';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    h3 {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 10px;
    }

    p {
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 10px;
        text-align: justify;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 150px;
    }

    #flag {
        position: absolute;
        bottom: 0;
        right: 0;
        display: block;
        width: 30px;
        height: 20px;
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAJFBMVEWvGychRoz+/v6vGSX/+/37/P8aRpH/9vgmRH6kFyP///35//9qTZEIAAABT0lEQVR4nO3QC2rDMBBAwa37T+9/35amCrYe9AQzEIIjr5a8GQAAAAAAAAAAAAAAAAAAAOBfz+zmk928s5svdvPCbg52mpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJ/Ta5/fj7Xp/zT8dxeV7n6+y4rdH7C4/xNbRmL5edXuua6/na/Lj9vnXbcpxmT5etHWv8cfv1/54bzCu7+WA3b+zmiZ0mpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSX0Ddov4F+NoZDcAAAAASUVORK5CYII=');
        background-size: cover;
    }

    :hover {
        img {
            box-shadow: 0px 47px 68px 0px rgba(214, 214, 214, 0.5);
        }
        cursor: pointer;
    }

    @media ${device.laptop} {
        width: 75%;
    }
`;
