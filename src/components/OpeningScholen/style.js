import styled from 'styled-components';
import { layout, colors } from '../../util/styling_vars';
import { device } from '../../util/screensizes';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};

    .buttons {
        margin-bottom: 5%;
        button {
            display: inline-block;
            width: 100%;
            border: none;
            background: none;

            a {
                text-align: center;
                width: 100%;
                border-radius: 3px;
                display: block;
                background: ${colors.turqouise};
                width: 100%;
                margin-bottom: 5%;
                color: white;
                padding: 15px 0;
            }
        }
    }

    .imgbox {
        padding: 0 0 15px 15px;
        height: 100%;
        width: 100%;
        max-width: 600px;
        max-height: 400px;
        margin: auto;

        img {
            height: 100%;
            width: 100%;
            max-width: 600px;
            max-height: 400px;
            min-height: 200px !important;
            box-shadow: -15px 15px ${colors.turqouise};
        }
    }
`;
