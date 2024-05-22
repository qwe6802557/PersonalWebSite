import { useNavigate } from 'react-router-dom';
import { Button} from "antd";
import './index.less';

function Home() {
    const navigate = useNavigate();  // 获取 navigate 函数

    const goToBlogList = () => {
        navigate('/blog-list');  // 使用 navigate 函数导航到博客列表页
    };

    return (
        <div className="home-container">
            这是一个首页
            <Button type="primary" onClick={goToBlogList}>去博客列表</Button>
        </div>
    );
}

export default Home;
