var Comment = require( '../comment/comment.jsx' );

var CommentList = React.createClass({

	render: function() {
		var commentNodes = this.props.data.map( function ( comment ) {
			return (
				<Comment key={comment.id} date={comment.date} content={comment.content.rendered} />
			);
		});
		return (
			<div>
				{commentNodes}
			</div>
		);
	}

});

module.exports = CommentList;