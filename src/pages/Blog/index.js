import {Button} from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from "@/store/features/counter";

function Blog () {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="blog">
            这是博客列表{ count }
            <Button type="primary" onClick={ () => dispatch(increment()) }>添加1</Button>
            <Button type="primary" onClick={ () => dispatch(decrement()) }>减少1</Button>
            <Button type="primary" onClick={ () => dispatch(incrementByAmount(6)) }>添加2</Button>
        </div>
    );
}

export default Blog;
