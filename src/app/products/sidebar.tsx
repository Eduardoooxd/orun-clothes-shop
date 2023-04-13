interface ProductSidebarProps {
    allCategories: string[];
}

const Sidebar = ({ allCategories }: ProductSidebarProps) => {
    return (
        <div>
            <h2>Categories</h2>
            <ul>
                {allCategories.map((category) => (
                    <li key={category}>
                        <a href="#">{category}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
