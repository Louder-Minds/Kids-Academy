import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    h3 {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 10px;
        margin-top: 5%;
        text-align: center;
    }

    p {
        display: none;
    }

    ul {
        margin: 0;
        margin-top: 5%;
        li {
            display: flex;
            align-items: center;
            font-size: 16px;
            margin-bottom: 5%;
            font-weight: 500;
            color: #14B09C;

            img {
                margin-right: 15px;
                width: 15px;
            }
        }
    }

    div {
        position: relative;
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

        img {
            width: 100%;
            max-width: 100%;
            object-fit: cover;
        }
    }

    :hover {
        cursor: pointer;
    }
`;
