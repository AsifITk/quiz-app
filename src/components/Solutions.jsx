import React, { useRef } from 'react'

function Solutions({ selectedAns, questions }) {
    let userAnswer = useRef(new Array(questions.length).fill(0));

    // for (let i = 0; i < selectedAns.current.length; i++) {
    //     userAnswer.current[selectedAns.current[i][1]] = selectedAns.current[i][0];

    // }
    console.log(selectedAns);

    return (
        <div>{
            questions.map((item, index) => {
                return (
                    <div className='ansContainer' key={index}>
                        {<div className="question"> {item[0]}</div>

                        }
                        <div className="correctAns">
                            {
                                item[1][1] == 1 ? <h5>{item[1][0]}</h5> : <></>
                            }
                            {
                                item[2][1] == 1 ? <h5>{item[2][0]}</h5> : <></>
                            }
                            {
                                item[3][1] == 1 ? <h5>{item[3][0]}</h5> : <></>
                            }
                            {
                                item[4][1] == 1 ? <h5>{item[4][0]}</h5> : <></>
                            }
                        </div >
                        <div className='seletedAns'>
                            {selectedAns.current[index] ? item[selectedAns.current[index]][0] : <h5>Time Out</h5>}
                        </div>
                    </div >)


            })




        }</div >
    )
}

export default Solutions