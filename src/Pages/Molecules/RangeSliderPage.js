import React, { Component } from 'react';
import { RangeSlider } from '../../Components/Molecules'

class RangeSliderPage extends Component {
    render() {
        return (
            <div>
                <h1 className="title">Range Slider</h1>
                <h2 className="u-my-32">Small Size</h2>
                <RangeSlider
                    slider
                    minvalue={0}
                    maxvalue={100}
                    defaultvalue={3}
                    rangestyle="small"
                    labelmaxvalue="Rp. 100.000"
                />
                <code>
                &lt;RangeSlider <br/>
                &nbsp;slider <br/>
                &nbsp;minvalue={0} <br/>
                &nbsp;maxvalue={100} <br/>
                &nbsp;defaultvalue={3} <br/>
                &nbsp;rangestyle="small" <br/>
                &nbsp;labelmaxvalue="Rp. 100.000" <br/>
                /&gt;
                </code>
                <h2 className="u-my-32">Medium Size</h2>
                <RangeSlider
                    slider
                    minvalue={0}
                    maxvalue={100}
                    defaultvalue={3}
                    rangestyle="medium"
                    labelmaxvalue="Rp. 100.000"
                />
                <code>
                &lt;RangeSlider <br/>
                &nbsp;slider <br/>
                &nbsp;minvalue={0} <br/>
                &nbsp;maxvalue={100} <br/>
                &nbsp;defaultvalue={3} <br/>
                &nbsp;rangestyle="medium" <br/>
                &nbsp;labelmaxvalue="Rp. 100.000" <br/>
                /&gt;
                </code>
                <h2 className="u-my-32">Large Size</h2>
                <RangeSlider
                    slider
                    minvalue={0}
                    maxvalue={100}
                    defaultvalue={3}
                    rangestyle="large"
                    labelmaxvalue="Rp. 100.000"
                />
                <code>
                &lt;RangeSlider <br/>
                &nbsp;slider <br/>
                &nbsp;minvalue={0} <br/>
                &nbsp;maxvalue={100} <br/>
                &nbsp;defaultvalue={3} <br/>
                &nbsp;rangestyle="large" <br/>
                &nbsp;labelmaxvalue="Rp. 100.000" <br/>
                /&gt;
                </code>
                <h2 className="u-my-32">Range Small Size</h2>
                <RangeSlider
                    range
                    minvalue={0}
                    maxvalue={100}
                    rangestyle="small"
                    labelminvalue="Rp. 0"
                    labelmaxvalue="Rp. 100.000"
                />
                <code>
                &lt;RangeSlider <br/>
                &nbsp;slider <br/>
                &nbsp;minvalue={0} <br/>
                &nbsp;maxvalue={100} <br/>
                &nbsp;defaultvalue={3} <br/>
                &nbsp;rangestyle="small" <br/>
                &nbsp;labelminvalue="Rp. 0" <br/>
                &nbsp;labelmaxvalue="Rp. 100.000" <br/>
                /&gt;
                </code>
                <h2 className="u-my-32">Range Medium Size</h2>
                <RangeSlider
                    range
                    minvalue={0}
                    maxvalue={100}
                    rangestyle="medium"
                    labelminvalue="Rp. 0"
                    labelmaxvalue="Rp. 100.000"
                />
                <code>
                &lt;RangeSlider <br/>
                &nbsp;slider <br/>
                &nbsp;minvalue={0} <br/>
                &nbsp;maxvalue={100} <br/>
                &nbsp;defaultvalue={3} <br/>
                &nbsp;rangestyle="medium" <br/>
                &nbsp;labelminvalue="Rp. 0" <br/>
                &nbsp;labelmaxvalue="Rp. 100.000" <br/>
                /&gt;
                </code>
                <h2 className="u-my-32">Range Large Size</h2>
                <RangeSlider
                    range
                    minvalue={0}
                    maxvalue={100}
                    rangestyle="large"
                    labelminvalue="Rp. 0"
                    labelmaxvalue="Rp. 100.000"
                />
                <code>
                &lt;RangeSlider <br/>
                &nbsp;slider <br/>
                &nbsp;minvalue={0} <br/>
                &nbsp;maxvalue={100} <br/>
                &nbsp;defaultvalue={3} <br/>
                &nbsp;rangestyle="large" <br/>
                &nbsp;labelminvalue="Rp. 0" <br/>
                &nbsp;labelmaxvalue="Rp. 100.000" <br/>
                /&gt;
                </code>
            </div>
        );
    }
}

export default RangeSliderPage;