import styled from 'styled-components';

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="images/cta-logo-one(1).png" alt = "" />
                    <SignUp><span>JUST </span>WATCH <span>IT</span></SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 12/04/23, the price of Disney+ and The Disney Bundle will increase by Rs. 150. 
                    </Description>
                    <CTALogoTwo src="images/cta-logo-two.png" alt="" />
                    </CTA>
                <BgImage />
            </Content>
        </Container>
    )
}

const Container  = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position : relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    fledx-direction: column;
    padding: 80px 40px;
    height: 100%;
`
const BgImage = styled.div`
    height : 100%;
    background-poition: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index : -1;
`;

const CTA = styled.div`
    margin-bottom : 2uw;
    max-width : 650px;
    flex-wrap : wrap;
    display : flex;
    flex-direction : column;
    justify-content : center;
    margin-top : 0;
    align-items : center;
    text-align : center;
    margin-right : auto;
    margin-left : auto;
    transition-timing-function : ease-out;
    transition-opacity : 0.2s;
    width : 100%;

    max-width : 650px;
    width : 100%;
`;


const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width : 600px;
    min-height : 1px;
    display : block;
    width : 100%;
`;

const SignUp = styled.a`
    font-weight : bold;
    color : #f9f9f9;
    background-color: rgba(21, 52, 93, 0.6) ;
    margin-bottom: 12px;
    width : 100%;
    letter-spacing : 1.5px;
    font-size : 18px;
    padding : 16.5px 0;
    border : 1px solid transparent;
    border-radius : 4px;

    span {
        color: #6EBFEF;
    }


    &:hover {
        background-color : #0483ee;
        cursor : pointer;
        transition : all 1s;
    }
`;

const Description = styled.p`
    color : hsla(0, 0%, 95.3%, 1);
    font-size : 11px;
    margin : 0 0 24px;
    line-height : 1.5;
    letter-spacing : 1.5px;
`;

const CTALogoTwo = styled.img`
    max-width : 600px;
    margin-bottom: 20px;
    display : inline-block;
    vertical-align : bottom;
    vertical-align : 100%;
`;

export default Login;