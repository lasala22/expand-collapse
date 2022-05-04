import { Component } from "react";


export default class ExpandCollapse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false
        };
    }
    handler = () => {
        this.setState({ isExpand: !this.state.isExpand });
    };
    render() {
        if (this.state.isExpand) {
            return (
                <div>
                    <h1 className="p-3 mb-2 bg-success text-white">Conditional Rendering</h1>
                    <button onClick={this.handler}>Đóng giới thiệu</button>
                    <p>Trong ReactJs, đôi khi bạn có một số component và tùy thuộc vào từng điều kiện ví dụ như trạng thái của state, props,… mà bạn muốn hiển thị một hoặc một số component nào đó. Khi đó bạn có thể sử dụng Conditional rendering để render ra component mà bạn mong muốn.</p>
                </div>
            )
        }
        return (
            <div>
                <h1 className="p-3 mb-2 bg-success text-white">Conditional Rendering</h1>
                <button onClick={this.handler}>Xem giới thiệu</button>
            </div>
        )
    }
}
