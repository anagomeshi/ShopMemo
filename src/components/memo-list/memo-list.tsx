import './memo-list.css'

type MemoListItemProps = {
    memoTitle: string;
    editDate: string;
    allItemNumber: number;
    completeItemNumber: number;
}

function MemoListItem({memoTitle, editDate, allItemNumber, completeItemNumber}: MemoListItemProps){
    return(
        <div className="memo-list-item">
            <div className="memo-metadata">
                <span className="memo-title">{memoTitle}</span>
                <span className="edit-date">{editDate}</span>
            </div>
            <div className="progress-container">
                <div className="progress-background">
                    <div className="progress-bar" style={{ width: `calc(100% * (${completeItemNumber} / ${allItemNumber}))` }}></div>
                </div>
                <span className="progress-value">{`${completeItemNumber} / ${allItemNumber}`}</span>
            </div>
        </div>
    )
}

export default function MemoList(){
    return(
        <div className="memo-list">
            <MemoListItem memoTitle="エブリイ　仕入れ" editDate="2025/5/24" allItemNumber={14} completeItemNumber={2}></MemoListItem>
            <MemoListItem memoTitle="エブリイ　仕入れ" editDate="2025/5/24" allItemNumber={14} completeItemNumber={2}></MemoListItem>
            <MemoListItem memoTitle="エブリイ　仕入れ" editDate="2025/5/24" allItemNumber={14} completeItemNumber={2}></MemoListItem>
            <MemoListItem memoTitle="エブリイ　仕入れ" editDate="2025/5/24" allItemNumber={14} completeItemNumber={2}></MemoListItem>
            <MemoListItem memoTitle="エブリイ　仕入れ" editDate="2025/5/24" allItemNumber={14} completeItemNumber={2}></MemoListItem>
            <MemoListItem memoTitle="エブリイ　仕入れ" editDate="2025/5/24" allItemNumber={14} completeItemNumber={2}></MemoListItem>
            <MemoListItem memoTitle="エブリイ　仕入れ" editDate="2025/5/24" allItemNumber={14} completeItemNumber={2}></MemoListItem>
            <MemoListItem memoTitle="エブリイ　仕入れ" editDate="2025/5/24" allItemNumber={14} completeItemNumber={2}></MemoListItem>
            <MemoListItem memoTitle="エブリイ　仕入れ" editDate="2025/5/24" allItemNumber={14} completeItemNumber={2}></MemoListItem>
            <MemoListItem memoTitle="エブリイ　仕入れ" editDate="2025/5/24" allItemNumber={14} completeItemNumber={2}></MemoListItem>
            <MemoListItem memoTitle="エブリイ　仕入れ" editDate="2025/5/24" allItemNumber={14} completeItemNumber={2}></MemoListItem>
            <MemoListItem memoTitle="エブリイ　仕入れ" editDate="2025/5/24" allItemNumber={14} completeItemNumber={2}></MemoListItem>
            <MemoListItem memoTitle="エブリイ　仕入れ" editDate="2025/5/24" allItemNumber={14} completeItemNumber={2}></MemoListItem>
            <MemoListItem memoTitle="エブリイ　仕入れ" editDate="2025/5/24" allItemNumber={14} completeItemNumber={2}></MemoListItem>
        </div>
    )
}