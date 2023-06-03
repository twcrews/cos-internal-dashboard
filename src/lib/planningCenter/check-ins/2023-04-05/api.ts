import { planningCenterProducts } from 'src/lib/configuration';
import { fetchCollection, fetchSingle } from '../../shared';
import {
  AttendanceType,
  CheckIn,
  CheckInGroup,
  CheckInTime,
  Event,
  EventLabel,
  EventPeriod,
  EventTime,
  Headcount,
  Label,
  Location,
  LocationEventPeriod,
  LocationEventTime,
  LocationLabel,
  Option,
  Organization,
  Pass,
  Person,
  PersonEvent,
	Station,
	Theme,
} from './types';

const rootUrl =
  planningCenterProducts.find((p) => p.name === 'Check-ins')?.baseUrl ?? '';

export const CheckIns = {
  fetch: () => fetchSingle<Organization>(`${rootUrl}/`),
  checkIns: {
    fetchAll: () => fetchCollection<CheckIn>(`${rootUrl}/check_ins`),
    select: (id: string) => ({
      fetch: () => fetchSingle<CheckIn>(`${rootUrl}/check_ins/${id}`),
      checkInGroup: {
        fetch: () =>
          fetchSingle<CheckInGroup>(
            `${rootUrl}/check_ins/${id}/check_in_group`
          ),
        checkIns: {
          fetchAll: () =>
            fetchCollection<CheckIn>(
              `${rootUrl}/check_ins/${id}/check_in_group/check_ins`
            ),
        },
      },
      checkInTimes: {
        fetchAll: () =>
          fetchCollection<CheckInTime>(
            `${rootUrl}/check_ins/${id}/check_in_times`
          ),
      },
      eventPeriod: {
        fetch: () =>
          fetchSingle<EventPeriod>(`${rootUrl}/check_ins/${id}/event_period`),
        checkIns: {
          fetchAll: () =>
            fetchCollection<CheckIn>(
              `${rootUrl}/check_ins/${id}/event_period/check_ins`
            ),
        },
        eventTimes: {
          fetchAll: () =>
            fetchCollection<EventTime>(
              `${rootUrl}/check_ins/${id}/event_period/event_times`
            ),
        },
        locationEventPeriods: {
          fetchAll: () =>
            fetchCollection<LocationEventPeriod>(
              `${rootUrl}/check_ins/${id}/event_period/location_event_periods`
            ),
          select: (periodId: string) => ({
            fetch: () =>
              fetchSingle<LocationEventPeriod>(
                `${rootUrl}/check_ins/${id}/event_period/location_event_periods/${periodId}`
              ),
            checkIns: {
              fetchAll: () =>
                fetchCollection<CheckIn>(
                  `${rootUrl}/check_ins/${id}/event_period/location_event_periods/${periodId}/check_ins`
                ),
            },
            location: {
              fetch: () =>
                fetchSingle<Location>(
                  `${rootUrl}/check_ins/${id}/event_period/location_event_periods/${periodId}/location`
                ),
            },
          }),
        },
      },
      eventTimes: {
        fetchAll: () =>
          fetchCollection<EventTime>(`${rootUrl}/check_ins/${id}/event_times`),
      },
      locations: {
        fetchAll: () =>
          fetchCollection<Location>(`${rootUrl}/check_ins/${id}/locations`),
        select: (locationId: string) => ({
          fetch: () =>
            fetchSingle<Location>(
              `${rootUrl}/check_ins/${id}/locations/${locationId}`
            ),
          checkIns: {
            fetchAll: () =>
              fetchCollection<CheckIn>(
                `${rootUrl}/check_ins/${id}/locations/${locationId}/check_ins`
              ),
          },
          locationEventPeriods: {
            fetchAll: () =>
              fetchCollection<LocationEventPeriod>(
                `${rootUrl}/check_ins/${id}/locations/${locationId}/location_event_periods`
              ),
            select: (periodId: string) => ({
              fetch: () =>
                fetchSingle<LocationEventPeriod>(
                  `${rootUrl}/check_ins/${id}/locations/${locationId}/location_event_periods/${periodId}`
                ),
              checkIns: {
                fetchAll: () =>
                  fetchCollection<CheckIn>(
                    `${rootUrl}/check_ins/${id}/locations/${locationId}/location_event_periods/${periodId}/check_ins`
                  ),
              },
            }),
          },
          locationEventTimes: {
            fetchAll: () =>
              fetchCollection<LocationEventTime>(
                `${rootUrl}/check_ins/${id}/locations/${locationId}/location_event_times`
              ),
          },
          locationLabels: {
            fetchAll: () =>
              fetchCollection<LocationEventTime>(
                `${rootUrl}/check_ins/${id}/locations/${locationId}/location_labels`
              ),
          },
          locations: {
            fetchAll: () =>
              fetchCollection<Location>(
                `${rootUrl}/check_ins/${id}/locations/${locationId}/locations`
              ),
          },
          options: {
            fetchAll: () =>
              fetchCollection<Option>(
                `${rootUrl}/check_ins/${id}/locations/${locationId}/options`
              ),
          },
          parent: {
            fetch: () =>
              fetchSingle<Location>(
                `${rootUrl}/check_ins/${id}/locations/${locationId}/parent`
              ),
          },
        }),
      },
      options: {
        fetchAll: () =>
          fetchCollection<Option>(`${rootUrl}/check_ins/${id}/options`),
      },
    }),
  },
  eventTimes: {
    fetchAll: () => fetchCollection<EventTime>(`${rootUrl}/event_times`),
    select: (id: string) => ({
      fetch: () => fetchSingle<EventTime>(`${rootUrl}/event_times/${id}`),
      availableLocations: {
        fetchAll: () =>
          fetchCollection<Location>(`${rootUrl}/event_times/${id}/locations`),
        select: (locationId: string) => ({
          fetch: () =>
            fetchSingle<Location>(
              `${rootUrl}/event_times/${id}/locations/${locationId}`
            ),
          checkIns: {
            fetchAll: () =>
              fetchCollection<CheckIn>(
                `${rootUrl}/event_times/${id}/locations/${locationId}/check_ins`
              ),
          },
          locationEventPeriods: {
            fetchAll: () =>
              fetchCollection<LocationEventPeriod>(
                `${rootUrl}/event_times/${id}/locations/${locationId}/location_event_periods`
              ),
            select: (periodId: string) => ({
              fetch: () =>
                fetchSingle<LocationEventPeriod>(
                  `${rootUrl}/event_times/${id}/locations/${locationId}/location_event_periods/${periodId}`
                ),
              checkIns: {
                fetchAll: () =>
                  fetchCollection<CheckIn>(
                    `${rootUrl}/event_times/${id}/locations/${locationId}/location_event_periods/${periodId}/check_ins`
                  ),
              },
            }),
          },
          locationEventTimes: {
            fetchAll: () =>
              fetchCollection<LocationEventTime>(
                `${rootUrl}/event_times/${id}/locations/${locationId}/location_event_times`
              ),
          },
          locationLabels: {
            fetchAll: () =>
              fetchCollection<LocationEventTime>(
                `${rootUrl}/event_times/${id}/locations/${locationId}/location_labels`
              ),
          },
          locations: {
            fetchAll: () =>
              fetchCollection<Location>(
                `${rootUrl}/event_times/${id}/locations/${locationId}/locations`
              ),
          },
          options: {
            fetchAll: () =>
              fetchCollection<Option>(
                `${rootUrl}/event_times/${id}/locations/${locationId}/options`
              ),
          },
          parent: {
            fetch: () =>
              fetchSingle<Location>(
                `${rootUrl}/event_times/${id}/locations/${locationId}/parent`
              ),
          },
        }),
      },
      checkIns: {
        fetchAll: () =>
          fetchCollection<CheckIn>(`${rootUrl}/event_times/${id}/check_ins`),
      },
      eventPeriod: {
        fetch: () =>
          fetchSingle<EventPeriod>(`${rootUrl}/event_times/${id}/event_period`),
        checkIns: {
          fetchAll: () =>
            fetchCollection<CheckIn>(
              `${rootUrl}/event_times/${id}/event_period/check_ins`
            ),
        },
        eventTimes: {
          fetchAll: () =>
            fetchCollection<EventTime>(
              `${rootUrl}/event_times/${id}/event_period/event_times`
            ),
        },
        locationEventPeriods: {
          fetchAll: () =>
            fetchCollection<LocationEventPeriod>(
              `${rootUrl}/event_times/${id}/event_period/location_event_periods`
            ),
          select: (periodId: string) => ({
            fetch: () =>
              fetchSingle<LocationEventPeriod>(
                `${rootUrl}/event_times/${id}/event_period/location_event_periods/${periodId}`
              ),
            checkIns: {
              fetchAll: () =>
                fetchCollection<CheckIn>(
                  `${rootUrl}/event_times/${id}/event_period/location_event_periods/${periodId}/check_ins`
                ),
            },
            location: {
              fetch: () =>
                fetchSingle<Location>(
                  `${rootUrl}/event_times/${id}/event_period/location_event_periods/${periodId}/location`
                ),
            },
          }),
        },
      },
      headcounts: {
        fetchAll: () =>
          fetchCollection<Headcount>(`${rootUrl}/event_times/${id}/headcounts`),
      },
      locationEventTimes: {
        fetchAll: () =>
          fetchCollection<LocationEventTime>(
            `${rootUrl}/event_times/${id}/location_event_times`
          ),
      },
    }),
  },
  events: {
    fetchAll: () => fetchCollection<Event>(`${rootUrl}/events`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Event>(`${rootUrl}/events/${id}`),
      attendanceTypes: {
        fetchAll: () =>
          fetchCollection<AttendanceType>(
            `${rootUrl}/events/${id}/attendanceTypes`
          ),
      },
      checkIns: {
        fetchAll: () =>
          fetchCollection<CheckIn>(`${rootUrl}/events/${id}/check_ins`),
      },
      currentEventTimes: {
        fetchAll: () =>
          fetchCollection<EventTime>(
            `${rootUrl}/events/${id}/current_event_times`
          ),
      },
      eventLabels: {
        fetchAll: () =>
          fetchCollection<EventLabel>(`${rootUrl}/events/${id}/event_labels`),
      },
      eventPeriods: {
        fetchAll: () =>
          fetchCollection<EventPeriod>(`${rootUrl}/events/${id}/event_periods`),
        select: (periodId: string) => ({
          fetch: () =>
            fetchSingle<EventPeriod>(`${rootUrl}/events/${id}/event_period`),
          checkIns: {
            fetchAll: () =>
              fetchCollection<CheckIn>(
                `${rootUrl}/events/${id}/event_period/check_ins`
              ),
          },
          eventTimes: {
            fetchAll: () =>
              fetchCollection<EventTime>(
                `${rootUrl}/events/${id}/event_period/event_times`
              ),
          },
          locationEventPeriods: {
            fetchAll: () =>
              fetchCollection<LocationEventPeriod>(
                `${rootUrl}/events/${id}/event_period/location_event_periods`
              ),
            select: (periodId: string) => ({
              fetch: () =>
                fetchSingle<LocationEventPeriod>(
                  `${rootUrl}/events/${id}/event_period/location_event_periods/${periodId}`
                ),
              checkIns: {
                fetchAll: () =>
                  fetchCollection<CheckIn>(
                    `${rootUrl}/events/${id}/event_period/location_event_periods/${periodId}/check_ins`
                  ),
              },
              location: {
                fetch: () =>
                  fetchSingle<Location>(
                    `${rootUrl}/events/${id}/event_period/location_event_periods/${periodId}/location`
                  ),
              },
            }),
          },
        }),
      },
      locations: {
        fetchAll: () =>
          fetchCollection<Location>(`${rootUrl}/events/${id}/locations`),
        select: (locationId: string) => ({
          fetch: () =>
            fetchSingle<Location>(
              `${rootUrl}/events/${id}/locations/${locationId}`
            ),
          checkIns: {
            fetchAll: () =>
              fetchCollection<CheckIn>(
                `${rootUrl}/events/${id}/locations/${locationId}/check_ins`
              ),
          },
          locationEventPeriods: {
            fetchAll: () =>
              fetchCollection<LocationEventPeriod>(
                `${rootUrl}/events/${id}/locations/${locationId}/location_event_periods`
              ),
            select: (periodId: string) => ({
              fetch: () =>
                fetchSingle<LocationEventPeriod>(
                  `${rootUrl}/events/${id}/locations/${locationId}/location_event_periods/${periodId}`
                ),
              checkIns: {
                fetchAll: () =>
                  fetchCollection<CheckIn>(
                    `${rootUrl}/events/${id}/locations/${locationId}/location_event_periods/${periodId}/check_ins`
                  ),
              },
            }),
          },
          locationEventTimes: {
            fetchAll: () =>
              fetchCollection<LocationEventTime>(
                `${rootUrl}/events/${id}/locations/${locationId}/location_event_times`
              ),
          },
          locationLabels: {
            fetchAll: () =>
              fetchCollection<LocationEventTime>(
                `${rootUrl}/events/${id}/locations/${locationId}/location_labels`
              ),
          },
          locations: {
            fetchAll: () =>
              fetchCollection<Location>(
                `${rootUrl}/events/${id}/locations/${locationId}/locations`
              ),
          },
          options: {
            fetchAll: () =>
              fetchCollection<Option>(
                `${rootUrl}/events/${id}/locations/${locationId}/options`
              ),
          },
          parent: {
            fetch: () =>
              fetchSingle<Location>(
                `${rootUrl}/events/${id}/locations/${locationId}/parent`
              ),
          },
        }),
      },
      personEvents: {
        fetchAll: () =>
          fetchCollection<PersonEvent>(`${rootUrl}/events/${id}/person_events`),
      },
    }),
  },
  headcounts: {
    fetchAll: () => fetchCollection<Headcount>(`${rootUrl}/headcounts`),
  },
  labels: {
    fetchAll: () => fetchCollection<Label>(`${rootUrl}/labels`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Label>(`${rootUrl}/labels/${id}`),
      eventLabels: {
        fetchAll: () =>
          fetchCollection<EventLabel>(`${rootUrl}/labels/${id}/event_labels`),
      },
      locationLabels: {
        fetchAll: () =>
          fetchCollection<LocationLabel>(
            `${rootUrl}/labels/${id}/location_labels`
          ),
        select: (labelId: string) => ({
          location: {
            fetch: () =>
              fetchSingle<Location>(`${rootUrl}/labels/${id}/location`),
            checkIns: {
              fetchAll: () =>
                fetchCollection<CheckIn>(
                  `${rootUrl}/labels/${id}/location_labels/${labelId}/location/check_ins`
                ),
            },
            locationEventPeriods: {
              fetchAll: () =>
                fetchCollection<LocationEventPeriod>(
                  `${rootUrl}/labels/${id}/location_labels/${labelId}/location/location_event_periods`
                ),
              select: (periodId: string) => ({
                fetch: () =>
                  fetchSingle<LocationEventPeriod>(
                    `${rootUrl}/labels/${id}/location_labels/${labelId}/location/location_event_periods/${periodId}`
                  ),
                checkIns: {
                  fetchAll: () =>
                    fetchCollection<CheckIn>(
                      `${rootUrl}/labels/${id}/location_labels/${labelId}/location/location_event_periods/${periodId}/check_ins`
                    ),
                },
              }),
            },
            locationEventTimes: {
              fetchAll: () =>
                fetchCollection<LocationEventTime>(
                  `${rootUrl}/labels/${id}/location_labels/${labelId}/location/location_event_times`
                ),
            },
            locationLabels: {
              fetchAll: () =>
                fetchCollection<LocationEventTime>(
                  `${rootUrl}/labels/${id}/location_labels/${labelId}/location/location_labels`
                ),
            },
            locations: {
              fetchAll: () =>
                fetchCollection<Location>(
                  `${rootUrl}/labels/${id}/location_labels/${labelId}/location/locations`
                ),
            },
            options: {
              fetchAll: () =>
                fetchCollection<Option>(
                  `${rootUrl}/labels/${id}/location_labels/${labelId}/location/options`
                ),
            },
            parent: {
              fetch: () =>
                fetchSingle<Location>(
                  `${rootUrl}/labels/${id}/location_labels/${labelId}/location/parent`
                ),
            },
          },
        }),
      },
    }),
  },
	options: {
		fetchAll: () => fetchCollection<Option>(`${rootUrl}/options`),
		select: (id: string) => ({
			fetch: () => fetchSingle<Option>(`${rootUrl}/options/${id}`),
			CheckIns: {
				fetchAll: () => fetchCollection<CheckIn>(`${rootUrl}/options/${id}/check_ins`)
			}
		})
	},
  passes: {
    fetchAll: () => fetchCollection<Pass>(`${rootUrl}/passes`),
  },
	people: {
    fetchAll: () => fetchCollection<Person>(`${rootUrl}/people`),
		select: (id: string) => ({
			fetch: () => fetchSingle<Person>(`${rootUrl}/people/${id}`),
			CheckIns: {
				fetchAll: () => fetchCollection<CheckIn>(`${rootUrl}/people/${id}/check_ins`)
			},
			organization: {
				fetch: () => fetchSingle<Organization>(`${rootUrl}/people/${id}/organization`)
			},
			passes: {
				fetchAll: () => fetchCollection<Pass>(`${rootUrl}/people/${id}/passes`)
			},
			personEvents: {
				fetchAll: () => fetchCollection<PersonEvent>(`${rootUrl}/people/${id}/person_events`)
			}
		})
	},
	stations: {
		fetchAll: () => fetchCollection<Station>(`${rootUrl}/stations`),
		select: (id: string) => ({
			fetch: () => fetchSingle<Station>(`${rootUrl}/stations/${id}`),
			checkInGroups: {
				fetchAll: () => fetchCollection<CheckInGroup>(`${rootUrl}/stations/${id}/check_in_groups`),
				select: (groupId: string) => ({
					fetch: () => fetchSingle<CheckInGroup>(`${rootUrl}/stations/${id}/check_in_groups/${groupId}`),
					checkIns: {
						fetchAll: () => fetchCollection<CheckIn>(`${rootUrl}/stations/${id}/check_in_groups/${groupId}/check_ins`),
					},
					eventPeriod: {
						fetch: () =>
							fetchSingle<EventPeriod>(`${rootUrl}/stations/${id}/check_in_groups/${groupId}/event_period`),
						checkIns: {
							fetchAll: () =>
								fetchCollection<CheckIn>(
									`${rootUrl}/stations/${id}/check_in_groups/${groupId}/event_period/check_ins`
								),
						},
						eventTimes: {
							fetchAll: () =>
								fetchCollection<EventTime>(
									`${rootUrl}/stations/${id}/check_in_groups/${groupId}/event_period/event_times`
								),
						},
						locationEventPeriods: {
							fetchAll: () =>
								fetchCollection<LocationEventPeriod>(
									`${rootUrl}/stations/${id}/check_in_groups/${groupId}/event_period/location_event_periods`
								),
							select: (periodId: string) => ({
								fetch: () =>
									fetchSingle<LocationEventPeriod>(
										`${rootUrl}/stations/${id}/check_in_groups/${groupId}/event_period/location_event_periods/${periodId}`
									),
								checkIns: {
									fetchAll: () =>
										fetchCollection<CheckIn>(
											`${rootUrl}/stations/${id}/check_in_groups/${groupId}/event_period/location_event_periods/${periodId}/check_ins`
										),
								},
								location: {
									fetch: () =>
										fetchSingle<Location>(
											`${rootUrl}/stations/${id}/check_in_groups/${groupId}/event_period/location_event_periods/${periodId}/location`
										),
								},
							}),
						},
					},
				})
			},
			checkedInAtCheckIns: {
				fetchAll: () => fetchCollection<CheckIn>(`${rootUrl}/stations/${id}/checked_in_at_check_ins`)
			},
			event: {
				fetch: () => fetchSingle<Event>(`${rootUrl}/stations/${id}/event`)
			},
			location: {
				fetch: () =>
					fetchSingle<Location>(`${rootUrl}/stations/${id}/location`),
				checkIns: {
					fetchAll: () =>
						fetchCollection<CheckIn>(
							`${rootUrl}/stations/${id}/location/check_ins`
						),
				},
				locationEventPeriods: {
					fetchAll: () =>
						fetchCollection<LocationEventPeriod>(
							`${rootUrl}/stations/${id}/location/location_event_periods`
						),
					select: (periodId: string) => ({
						fetch: () =>
							fetchSingle<LocationEventPeriod>(
								`${rootUrl}/stations/${id}/location/location_event_periods/${periodId}`
							),
						checkIns: {
							fetchAll: () =>
								fetchCollection<CheckIn>(
									`${rootUrl}/stations/${id}/location/location_event_periods/${periodId}/check_ins`
								),
						},
					}),
				},
				locationEventTimes: {
					fetchAll: () =>
						fetchCollection<LocationEventTime>(
							`${rootUrl}/stations/${id}/location/location_event_times`
						),
				},
				locationLabels: {
					fetchAll: () =>
						fetchCollection<LocationEventTime>(
							`${rootUrl}/stations/${id}/location/location_labels`
						),
				},
				locations: {
					fetchAll: () =>
						fetchCollection<Location>(
							`${rootUrl}/stations/${id}/location/locations`
						),
				},
				options: {
					fetchAll: () =>
						fetchCollection<Option>(
							`${rootUrl}/stations/${id}/location/options`
						),
				},
				parent: {
					fetch: () =>
						fetchSingle<Location>(
							`${rootUrl}/stations/${id}/location/parent`
						),
				},
			},
		})
	},
	themes: {
		fetchAll: () => fetchCollection<Theme>(`${rootUrl}/themes`)
	}
};
