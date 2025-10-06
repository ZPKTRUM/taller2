import React from 'react';

const RecentActivity = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'new':
        return '📝';
      case 'update':
        return '🔄';
      case 'complete':
        return '✅';
      default:
        return '📋';
    }
  };

  if (activities.length === 0) {
    return (
      <div className="recent-activity">
        <h3>Actividad Reciente</h3>
        <div className="activity-list">
          <div className="no-activity">
            <p>No hay actividad reciente. Los siniestros registrados aparecerán aquí.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="recent-activity">
      <h3>Actividad Reciente</h3>
      <div className="activity-list">
        {activities.map(activity => (
          <div key={activity.id} className="activity-item">
            <div className="activity-icon">
              {getActivityIcon(activity.type)}
            </div>
            <div className="activity-content">
              <p>{activity.message}</p>
              <small>Cliente: {activity.cliente}</small>
            </div>
            <div className="activity-time">
              {activity.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;